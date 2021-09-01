
const slider = document.getElementById('range');
const label = slider.labels[0];

const range = slider.max - slider.min;

label.innerHTML = slider.value;

let labelPosition = +slider.value / range * slider.clientWidth + (10 + (slider.value) / (range) * -20 )
label.style.transform = `translateX(${labelPosition}px) translateX(-50%)`


slider.addEventListener('input', _ => {

  label.innerHTML = slider.value;
  labelPosition = +slider.value / range * slider.clientWidth + (10 + (slider.value) / (range) * -20 )
  label.style.transform = `translateX(${labelPosition}px) translateX(-50%)`

})