// Mobile Menu Toggle
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function () {
  menuToggle.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// FAQ Accordion
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");

  question.addEventListener("click", () => {
    faqItems.forEach((faq) => {
      if (faq !== item) {
        faq.classList.remove("active");
      }
    });
    item.classList.toggle("active");
  });
});


const festivalImg = document.getElementById("festivalImg");
const popup = document.getElementById("imagePopup");
const popupImg = document.getElementById("popupImg");
const closePopup = document.querySelector(".close-popup");

// OPEN
festivalImg.addEventListener("click", () => {
  popup.style.display = "flex";
  popupImg.src = festivalImg.src;
});

// CLOSE BUTTON
closePopup.addEventListener("click", () => {
  popup.style.display = "none";
});

// CLICK OUTSIDE CLOSE
popup.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.style.display = "none";
  }
});

