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

// Form Validation
document.getElementById("demoForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let mobile = document.getElementById("mobile").value.trim();
  let email = document.getElementById("email").value.trim();

  let namePattern = /^[A-Za-z ]{3,40}$/;
  let mobilePattern = /^[6-9][0-9]{9}$/;
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!namePattern.test(name)) {
    alert("Enter valid full name");
    return;
  }

  if (!mobilePattern.test(mobile)) {
    alert("Enter valid mobile number");
    return;
  }

  if (!emailPattern.test(email)) {
    alert("Enter valid email");
    return;
  }

  alert("Form submitted successfully");
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
