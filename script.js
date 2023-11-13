// This is for general capturing of HTML Elements for further processing
const smallcups = document.querySelectorAll(".cup-small");
const liters = document.getElementById("liters");
const percentage = document.getElementById("percentage");
const remained = document.getElementById("remained");

// This is for click event on the small cups...
smallcups.forEach((cup, idx) => {
  cup.addEventListener("click", () => highLightSmallCups(idx));
});

function highLightSmallCups(idx) {
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

  updateBigCups();
}

// This is for updating the big cup adding the dynamic stylings...

function updateBigCups() {
  const fullCups = document.querySelectorAll(".cup-small.full").length;
  const totalCups = smallcups.length;
  if (fullCups === 0) {
    percentage.style.visibility = "hidden";
    percentage.style.height = "0";
  } else {
    percentage.style.visibility = "visible";
    percentage.style.height = `${(fullCups / totalCups) * 330}px`;
    percentage.innerText = `${(fullCups / totalCups) * 100}%`;
  }

  if (fullCups === totalCups) {
    remained.style.visibility = "hidden";
    remained.style.height = "0";
  } else {
    remained.style.visibility = "visible";
    liters.innerText = `${2 - (250 * fullCups) / 1000}L`;
  }
}
