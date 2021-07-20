const container = document.getElementById("boxes");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  container.classList.toggle("big");
})

for(i=0;i<16;i++){
  const box = document.createElement("div");
  box.classList.add("box");
  box.style.backgroundPositionX = `-${(i%4)*125}px`;
  box.style.backgroundPositionY = `-${Math.floor(i/4)*125}px`
  container.appendChild(box);
}