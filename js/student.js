const track = document.getElementById("journeyTrack");

let speed = 0.5;
let position = 0;

track.innerHTML += track.innerHTML;

function animate() {
  position -= speed;

  if (position <= -track.scrollWidth / 2) {
    position = 0;
  }

  track.style.transform = `translateX(${position}px)`;
  requestAnimationFrame(animate);
}

animate();

/* Pause on hover */
track.addEventListener("mouseenter", () => speed = 0);
track.addEventListener("mouseleave", () => speed = 0.5);