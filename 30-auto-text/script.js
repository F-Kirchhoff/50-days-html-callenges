const textEl = document.getElementById("text");
const speedEl = document.getElementById("speed");

const text = "We love programming."
let idx = 1;
let speed = 300 / speedEl.value;

function writeText() {
  textEl.innerText = text.slice(0,idx);
  idx++

  if (idx === text.length + 1) {
    idx = 0;
    setTimeout(writeText, 2000);
  } else {
    setTimeout(writeText, speed + Math.floor(Math.random()*40));
  }
}

writeText()

speedEl.addEventListener("change", e => {speed = 300 / e.target.value});