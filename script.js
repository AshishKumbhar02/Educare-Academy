const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  navMenu.classList.toggle("active");
});



const faqItems = document.querySelectorAll(".faq-item");
faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");
  question.addEventListener("click", () => {
    item.classList.toggle("active");
    faqItems.forEach((other) => {
      if (other !== item) other.classList.remove("active");
    });
  });
});

const backToTop = document.getElementById("backToTop");
const rocket = backToTop.querySelector(".rocket-img");

// Show button on scroll
window.addEventListener("scroll", function () {
  if (window.scrollY > 200) {
    backToTop.style.display = "flex";
  } else {
    backToTop.style.display = "none";
  }
});

// Click to scroll + fly animation
backToTop.addEventListener("click", function (e) {
  e.preventDefault();

  rocket.classList.add("fly");

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  rocket.addEventListener(
    "animationend",
    function () {
      rocket.classList.remove("fly");
    },
    { once: true },
  );
});









const openBtn = document.getElementById("openDemo");
const modal = document.getElementById("demoModal");
const closeBtn = document.getElementById("closeDemo");

openBtn.onclick = () => {
modal.style.display = "flex";
}

closeBtn.onclick = () => {
modal.style.display = "none";
}

window.onclick = (e) => {
if(e.target == modal){
modal.style.display = "none";
}
}
