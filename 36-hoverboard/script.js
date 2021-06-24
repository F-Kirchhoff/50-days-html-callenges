const container = document.querySelector(".hover-container");

const hexCodes = "0123456789abcdef"
const hoverEnter = .5;
const hoverStay = .5;
const hoverLeave = 1;

const getRandomColor = (seed = "#") => {
  if (seed.length >= 7 ) return seed;
  
  return getRandomColor(seed + hexCodes[Math.floor(Math.random() * 16)])
}

const getHSLColor = () => {
  return `hsl(${(Math.floor(Date.now()/100))%360}, ${20 + Math.floor(Math.random()*20)}%, ${40 + Math.floor(Math.random()*10)}%)`
}

const setColor = (e , msg, deltaT) => {
  e.target.style.backgroundColor = msg === "random" ? getHSLColor() : null;
  // e.target.style.backgroundColor = msg === "random" ? getRandomColor() : null;
  e.target.style.transition = `${deltaT}s`
}

const tileBlueprint = document.createElement("div");
tileBlueprint.classList.add("tile");

const addTile = () => {
  const newTile = tileBlueprint.cloneNode();
  newTile.addEventListener("mouseenter", e => setColor(e,"random", hoverEnter));
  newTile.addEventListener("mouseleave", e => setTimeout(() => setColor(e,null, hoverLeave), Math.round(hoverStay * 500)));
  container.appendChild(newTile);
}

let count = 0;
while (count < 100) {
  count++;
  addTile();

}