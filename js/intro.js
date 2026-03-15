const intro = document.getElementById("intro");

/* Scroll lock while intro visible */
document.body.style.overflow = "hidden";

/* ENTER WEBSITE */

function enterSite() {
  if (!intro) return;

  intro.style.transition = "opacity 0.8s ease, transform 0.8s ease";
  intro.style.opacity = "0";
  intro.style.transform = "scale(1.05)";

  setTimeout(() => {
    intro.style.display = "none";
    document.body.style.overflow = "auto"; // enable scroll
  }, 800);
}

/* ESC key close */

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    enterSite();
  }
});

/* ===== Typing Effect ===== */

const text = "Ashish Kumbhar";
let i = 0;
const typingElement = document.getElementById("typing");

function typing() {
  if (!typingElement) return;

  if (i < text.length) {
    typingElement.innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 120);
  }
}

typing();
