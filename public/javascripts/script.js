const optionsButton = document.getElementById("optionsButton");
const overlay = document.getElementById("overlay");

optionsButton.addEventListener("click", () => {
  overlay.style.display = "flex";
});

overlay.addEventListener("click", (event) => {
  if (event.target === overlay) {
    overlay.style.display = "none";
  }
});
