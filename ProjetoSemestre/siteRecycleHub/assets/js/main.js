const menuButton = document.getElementById("menu-button");
const headerNavbar = document.getElementById("header-navbar");
const closeButton = "ri-close-line";
const openButton = "ri-menu-line";
let menuItem = document.querySelectorAll(".menu-item");

let menuShow = () => {
  if (menuButton.className == closeButton) {
    menuButton.className = openButton;
    headerNavbar.classList.remove("header-navbar-show");
  } else {
    menuButton.className = closeButton;
    headerNavbar.classList.add("header-navbar-show");
  }
};

let closeMenuLink = () => {
  headerNavbar.classList.remove("header-navbar-show");
  menuButton.className = openButton;
};

menuButton.addEventListener("click", menuShow);
menuItem.forEach((n) => n.addEventListener("click", closeMenuLink));

/******************* Slider ***********************/

var swiper = new Swiper(".slider-top", {
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
