document.addEventListener("DOMContentLoaded", function () {

  // ================= SLIDER =================
  const images = [
    "images/class9.png",
    "images/class10.png",
    "images/class11_12commerce.png",
    "images/class11_12science.png",
    "images/class12commerce.png",
    "images/class12science.png",
  ];

  let i = 0;
  const img = document.getElementById("festivalImg");

  window.nextSlide = function () {
    i = (i + 1) % images.length;
    img.src = images[i];
  };

  window.prevSlide = function () {
    i = (i - 1 + images.length) % images.length;
    img.src = images[i];
  };

  // ================= POPUP =================
  const popup = document.getElementById("imagePopup");
  const popupImg = document.getElementById("popupImg");

  img.onclick = () => {
    popup.style.display = "block";
    popupImg.src = img.src;
  };

  document.querySelector(".close-popup").onclick = () => {
    popup.style.display = "none";
  };

  // ================= OTP =================
  let otp = "";

  const phone = document.getElementById("phone");
  const otpBtn = document.getElementById("otpBtn");
  const submitBtn = document.getElementById("add_submitBtn");

  phone.addEventListener("input", () => {
    phone.value = phone.value.replace(/\D/g, "");

    if (phone.value.length === 10) {
      otpBtn.style.display = "block";
    } else {
      otpBtn.style.display = "none";
    }
  });

  window.sendOTP = function () {
    otp = Math.floor(1000 + Math.random() * 9000);
    alert("OTP: " + otp);

    document.getElementById("otpSection").style.display = "block";
    document.getElementById("verifySection").style.display = "block";

    document.getElementById("showNumber").style.display = "block";
    document.getElementById("showNumber").innerText =
      "Sent to ******" + phone.value.slice(6);
  };

  window.verifyOTP = function () {
    const userOTP = document.getElementById("add_otp").value;

    if (userOTP == otp) {
      alert("OTP Verified");
      submitBtn.disabled = false;
    } else {
      alert("Wrong OTP");
    }
  };

  // ================= SUBMIT =================
  document.getElementById("admissionForm").addEventListener("submit", (e) => {
    e.preventDefault();

    alert("Form Submitted Successfully!");

    e.target.reset();
    submitBtn.disabled = true;
  });

});