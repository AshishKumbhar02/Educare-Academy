const rocket = document.getElementById("backToTop");

rocket.addEventListener("click", function () {
  rocket.classList.add("rocket-launch");

  setTimeout(() => {
    rocket.classList.remove("rocket-launch");
  }, 2200);
});
