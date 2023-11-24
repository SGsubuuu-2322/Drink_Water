// This is the script file for this project written using Vanilla Js. technology...
// This is for general capturing of HTML Elements for further processing
const smallcups = document.querySelectorAll(".cup-small");
const liters = document.getElementById("liters");
const percentage = document.getElementById("percentage");
const remained = document.getElementById("remained");

// This is for click event on the small cups...
smallcups.forEach((cup, idx) => {
  cup.addEventListener("click", () => highLightSmallCups(idx));
});

// This function is for highlighting the small cups which when clicked....
function highLightSmallCups(idx) {
  // This code is for checking, Is the selected glass is full and the next glass is empty or not, If yes then on click on the selected glass once again will reduce and unhighlight the selected glass...
  if (
    smallcups[idx].classList.contains("full") &&
    !smallcups[idx].nextElementSibling.classList.contains("full")
  ) {
    idx--;
  }

  // This code will check all the small cups from the starting to the selected glass and will highlight it if full class is not present...
  smallcups.forEach((cup, idx2) => {
    if (idx2 <= idx) {
      cup.classList.add("full");
    } else {
      cup.classList.remove("full");
    }
  });

  // And it'll call the utility method for updating the big glass...
  updateBigCups();
}

// This is for updating the big cup adding the dynamic stylings...

function updateBigCups() {
  // Its for getting all the full small cups with its number and total small cups and then by calculation it will fill the big glass...
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

  // It is for the dynamically addition of remained style and liters...
  if (fullCups === totalCups) {
    remained.style.visibility = "hidden";
    remained.style.height = "0";
  } else {
    remained.style.visibility = "visible";
    liters.innerText = `${2 - (250 * fullCups) / 1000}L`;
  }
}
