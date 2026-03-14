// Mobile Menu Toggle
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function () {
  menuToggle.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Book free Demo Modal
const openDemo = document.getElementById("openDemo");
const demoModal = document.getElementById("demoModal");
const closeDemo = document.getElementById("closeDemo");

openDemo.onclick = () => {
  demoModal.style.display = "flex";
};

closeDemo.onclick = () => {
  demoModal.style.display = "none";
};

window.onclick = (e) => {
  if (e.target == demoModal) {
    demoModal.style.display = "none";
  }
};

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
