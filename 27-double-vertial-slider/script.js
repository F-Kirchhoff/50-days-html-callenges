const sliderContainer = document.querySelector(".slider-container");
const rightSlide = document.querySelector(".right-slide");
  const leftSlide = document.querySelector(".left-slide");
const upBtn = document.querySelector(".up-button");
const downBtn = document.querySelector(".down-button");
const slideLength = rightSlide.querySelectorAll("div").length;

Number.prototype.mod = function(n) {
  return ((this%n)+n)%n;
};

let activeSlideIndex = 0;

leftSlide.style.top = `-${(slideLength - 1) * 100}vh`;

function up() {
  activeSlideIndex = (activeSlideIndex + 1).mod(slideLength);
}

function down() {
  activeSlideIndex = (activeSlideIndex - 1).mod(slideLength);
}

function updateSlides() {
  leftSlide.style.transform = `translateY(${activeSlideIndex * 100}vh)`;
  rightSlide.style.transform = `translateY(-${activeSlideIndex * 100}vh)`;
}

upBtn.addEventListener("click", async() => {
  up();
  updateSlides();
})

downBtn.addEventListener("click", async() => {
  down();
  updateSlides();
})