toggle = document.querySelector(".toggle");
nav = document.querySelector(".nav-container");

toggle.onclick = toggleNav;

function toggleNav() {
    nav.classList.toggle("closed");
}