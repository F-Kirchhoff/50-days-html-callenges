const carouselFrame = document.querySelector(".carousel-frame");
const carousel = document.querySelector( ".carousel" );
const slides = Array.from( document.querySelector( ".carousel" ).children );
const nextBtn = document.getElementById( "next" );
const prevBtn = document.getElementById( "prev" );

const slideCount = slides.length;
const slideDim = carouselFrame.clientWidth;

slides.forEach( slide => {
  slide.style.width = carouselFrame.clientWidth + "px";
  slide.style.height = carouselFrame.clientHeight + "px";
  slide.style.objectFit = "cover";
  slide.style.objectPosition = "center";
});

let idx = 0


nextBtn.addEventListener( "click", () => {
  idx = next(idx);
  updateCarousel(idx);
})
prevBtn.addEventListener( "click", () => {
  idx = prev(idx);
  updateCarousel(idx);
})

function updateCarousel( idx ) {
  carousel.style.transform = `translateX(-${slideDim*idx}px)`;
}

function next(idx) {
  return idx === slideCount - 1 ? 0 : idx + 1;
}
function prev(idx) {
  return idx === 0 ? slideCount - 1 : idx - 1;
}