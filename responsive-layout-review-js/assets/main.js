let body = document.body;
let mobilenav = document.querySelector(".mobile-nav");
let closeMenu = document.querySelector(".close");

function addMobileNav() {
  mobilenav.classList.toggle("hide");
  mobilenav.classList.toggle("show");
}

let button = document.querySelector(".mobile-nav-button");
button.addEventListener("click", addMobileNav);


closeMenu.addEventListener("click", addMobileNav);