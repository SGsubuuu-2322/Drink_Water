const smallcups = document.querySelectorAll(".cup-small");
const liters = document.getElementById("liters");
const percentage = document.getElementById("percentage");
const remained = document.getElementById("remained");

smallcups.forEach((cup, idx) => {
  cup.addEventListener("click", () => highLightCups(idx));
});

function highLightCups(idx) {
  if (
    smallcups[idx].classList.contains("full") &&
    !smallcups[idx].nextElementSibling.classList.contains("full")
  ) {
    idx--;
  }

  smallcups.forEach((cup, idx2) => {
    if (idx2 <= idx) {
      cup.classList.add("full");
    } else {
      cup.classList.remove("full");
    }
  });
}
