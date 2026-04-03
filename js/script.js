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

// OTP Section
const emailInput = document.getElementById("email");
const sendOtpBtn = document.getElementById("sendOtpBtn");
const otpBox = document.getElementById("otpBox");
const otpActions = document.getElementById("otpActions"); // 👈 NEW

// Enable button only if email valid
emailInput.addEventListener("input", () => {
  sendOtpBtn.disabled = !emailInput.checkValidity();
});

// Show OTP box after click
sendOtpBtn.addEventListener("click", () => {
  otpBox.style.display = "block";
  otpActions.style.display = "flex"; // 👈 NEW
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

// PHONE NUMBER VALIDATION & SHOW OTP BUTTON
document.getElementById("phone").addEventListener("input", function () {
  let phone = this.value;
  let otpBtn = document.getElementById("otpBtn");

  // ✅ ONLY 10 DIGIT SHOW
  if (phone.length === 10 && /^[0-9]+$/.test(phone)) {
    otpBtn.style.display = "block";
  } else {
    otpBtn.style.display = "none";
  }
});
