// Store button and dropdown element references in arrays
const buttons = [
  document.getElementById("dropdownButton"),
  document.getElementById("dropdownButton2"),
  document.getElementById("dropdownButton3"),
];

const dropdowns = [
  document.getElementById("myDropdown"),
  document.getElementById("myDropdown2"),
  document.getElementById("myDropdown3"),
];

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    // Close all open dropdowns
    dropdowns.forEach((dropdown, dropdownIndex) => {
      if (dropdownIndex !== index) {
        dropdown.classList.remove("show");
      }
    });

    // Toggle the selected dropdown
    dropdowns[index].classList.toggle("show");
  });
});

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".links");
const special = document.querySelector(".special");
const nav = document.querySelector(".nav");
const nav2 = document.querySelector(".nav2");
const nav3 = document.querySelector(".nav3");

hamburger.addEventListener("click", function () {
  navMenu.classList.toggle("active");
  nav.setAttribute("src", "./images/icon-arrow-dark.svg");
  nav2.setAttribute("src", "./images/icon-arrow-dark.svg");
  nav3.setAttribute("src", "./images/icon-arrow-dark.svg");

  if (navMenu.classList.contains("active")) {
    hamburger.setAttribute("src", "./images/icon-close.svg");
  } else {
    hamburger.setAttribute("src", "./images/icon-hamburger.svg");
  }
});
