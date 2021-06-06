const nav = document.getElementById("nav")

window.addEventListener("scroll",() => {
  if (window.scrollY >= 400 && !nav.classList.contains("small")) {
    nav.classList.add("small");
  } else if (window.scrollY < 400 && nav.classList.contains("small")){
    nav.classList.remove("small");
  }
})