const search = document.getElementById("courseSearch");
const cards = document.querySelectorAll(".degree-box");

search.addEventListener("input", () => {
  const value = search.value.toLowerCase();

  cards.forEach(card => {
    const text = card.innerText.toLowerCase();

    if (text.includes(value)) {
      card.style.display = "block";
      card.style.animation = "fadeUp 0.4s ease";
    } else {
      card.style.display = "none";
    }
  });
});