document.addEventListener("DOMContentLoaded", function () {
  // ================= SLIDER =================
  const images = [
    "images/class5.png",
    "images/class6.png",
    "images/class7.png",
    "images/class8.png",
    "images/class9.png",
    "images/class10.png",
    "images/class11commerce.png",
    "images/class12commerce.png",
    "images/class11science.png",
    "images/class12science.png",
  ];

  let index = 0;
  const img = document.getElementById("festivalImg");

  if (img) {
    window.nextSlide = function () {
      index = (index + 1) % images.length;
      img.src = images[index];
    };

    window.prevSlide = function () {
      index = (index - 1 + images.length) % images.length;
      img.src = images[index];
    };
  }

  // ================= POPUP =================
  const popup = document.getElementById("imagePopup");
  const popupImg = document.getElementById("popupImg");
  const closeBtn = document.querySelector(".close-popup");

  if (img && popup && popupImg) {
    img.addEventListener("click", () => {
      popup.style.display = "block";
      popupImg.src = img.src;
    });
  }

  if (closeBtn && popup) {
    closeBtn.addEventListener("click", () => {
      popup.style.display = "none";
    });
  }

  // ================= FORM =================
  const form = document.getElementById("admissionForm");
  const submitBtn = document.getElementById("add_submitBtn");
  const successMsg = document.getElementById("successMsg");

  if (form && submitBtn) {
    // ================= VALIDATION =================
    form.addEventListener("input", () => {
      const name = document.getElementById("name").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const studentClass = document.getElementById("studentClass").value;

      const isValidPhone = /^[0-9]{10}$/.test(phone);

      submitBtn.disabled = !(name && isValidPhone && studentClass);
    });

    // ================= SUBMIT =================
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const loader = submitBtn.querySelector(".loader");
      const text = submitBtn.querySelector(".btn-text");

      // Show loader
      if (loader && text) {
        loader.style.display = "inline-block";
        text.textContent = "Submitting...";
      }

      submitBtn.disabled = true;

      // ================= GET FORM DATA =================
      const name = document.getElementById("name").value;
      const phone = document.getElementById("phone").value;
      const studentClass = document.getElementById("studentClass").value;
      const school = document.getElementById("school").value;

      // ================= WHATSAPP =================
      const whatsappNumber = "917045529450"; // 👈 CHANGE THIS

      const message = `*New Admission Enquiry*
      
      • Name: ${name}
      • Phone: ${phone}
      • Class: ${studentClass}
      • School: ${school || "-"}
      
      Please respond to this enquiry.`;

      const encodedMessage = encodeURIComponent(message);
      const url = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

      // Fake delay for better UX
      setTimeout(() => {
        // Hide loader
        if (loader && text) {
          loader.style.display = "none";
          text.textContent = "Book Free Demo";
        }

        // Show success message
        if (successMsg) {
          successMsg.style.display = "block";
        }

        // Open WhatsApp
        window.open(url, "_blank");

        // Reset form
        form.reset();
        submitBtn.disabled = true;

        // Hide success after 3 sec
        setTimeout(() => {
          if (successMsg) successMsg.style.display = "none";
        }, 3000);
      }, 1500);
    });
  }
});
