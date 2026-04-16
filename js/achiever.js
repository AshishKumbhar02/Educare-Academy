const track = document.getElementById("track");
const cards = document.querySelectorAll(".card");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

let index = 0;

function updateActive() {
  cards.forEach(c => c.classList.remove("active"));

  // detect center card
  let center = track.scrollLeft + track.offsetWidth / 2;

  cards.forEach(card => {
    let cardCenter = card.offsetLeft + card.offsetWidth / 2;

    if (Math.abs(center - cardCenter) < card.offsetWidth / 2) {
      card.classList.add("active");
    }
  });
}

// BUTTON CLICK
next.onclick = () => {
  track.scrollBy({ left: 330, behavior: "smooth" });
};

prev.onclick = () => {
  track.scrollBy({ left: -330, behavior: "smooth" });
};

// AUTO ACTIVE DETECT
track.addEventListener("scroll", updateActive);

// INIT
updateActive();