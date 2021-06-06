const slides = document.querySelectorAll(".slide");
const leftA = document.getElementById("left");
const rightA = document.getElementById("right");
const bg = document.body;
var current = 0; 

Number.prototype.mod = function(n) {
  return ((this%n)+n)%n;
};


rightA.addEventListener("click",() => slide(1));
leftA.addEventListener("click",() => slide(-1));




function slide(dir) {
  current = (current+dir).mod(slides.length);
  toggleActive(current);
  bg.style.backgroundImage = slides[current].style.backgroundImage;
}

function toggleActive(pos) {
  pos = pos.mod(slides.length);
  slides.forEach((slide,idx) => {
    slide.classList.remove("active");
    if (idx === pos) {
      slide.classList.add("active");
    }
  });
}
