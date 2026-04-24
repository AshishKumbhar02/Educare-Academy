const track = document.getElementById("track");

track.innerHTML += track.innerHTML;

let pos = 0;
let speed = 0.5;
let paused = false;

function animate() {
  if (!paused) {
    pos -= speed;

    if (Math.abs(pos) >= track.scrollWidth / 2) {
      pos = 0;
    }

    track.style.transform = `translateX(${pos}px)`;
  }
  requestAnimationFrame(animate);
}

// hover pause
track.addEventListener("mouseenter", () => (paused = true));
track.addEventListener("mouseleave", () => (paused = false));

// touch support
let startX = 0;

track.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
  paused = true;
});

track.addEventListener("touchmove", (e) => {
  let moveX = e.touches[0].clientX;
  let diff = moveX - startX;

  pos += diff * 0.4;
  startX = moveX;
});

track.addEventListener("touchend", () => {
  paused = false;
});

animate();
