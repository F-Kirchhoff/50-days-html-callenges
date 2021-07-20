const pwInput = document.getElementById("pw");
const bw = document.getElementById("bg");

pwInput.addEventListener("input", e => {
  const len = e.target.value.length;
  bw.style.filter = `blur(${10-len}px) grayscale(${100-10*len}%)`;
});