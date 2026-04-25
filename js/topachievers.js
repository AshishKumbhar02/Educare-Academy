document.addEventListener("DOMContentLoaded", () => {
  const track = document.getElementById("track");

  // safety check
  if (!track) return;

  // already duplicated ho to dobara mat karo
  if (track.dataset.cloned === "true") return;

  // original cards ka array lo
  const originalCards = Array.from(track.children);

  // fragment for performance
  const fragment = document.createDocumentFragment();

  // har card ka clone banao
  originalCards.forEach((card) => {
    const clone = card.cloneNode(true);
    fragment.appendChild(clone);
  });

  // append clones at end
  track.appendChild(fragment);

  // mark as done
  track.dataset.cloned = "true";
});