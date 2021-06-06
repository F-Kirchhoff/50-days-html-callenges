const secPointer = document.querySelectorAll(".sec .cutter");
const minPointer = document.querySelectorAll(".min .cutter");
const hourPointer = document.querySelectorAll(".hour .cutter");
const sec0 = [-48,-132];
const min0 = [-48,-132];
const hour0 = [-60,-120];
const secDelta = 6;
const minDelta = 6;
const hourDelta = 30;
let currentSecs = 0;


let now = new Date();
currentSecs = now.getSeconds() + now.getMinutes()*60 + now.getHours()*3600;

let tiktok = setInterval(nextSecond,1000);


function nextSecond(){
  currentSecs++;
  setClock(currentSecs);
}

function setClock(sec) {
  min = Math.floor(sec/60);
  hour = Math.floor(sec/3600);
  setPointer(secPointer,sec0,sec*secDelta);
  setPointer(minPointer,min0,min*minDelta);
  setPointer(hourPointer,hour0,hour*hourDelta);
}

function setPointer(pointer,zero,position) {
  pointer[0].style.transform = `translate(-50%, -50%) rotate(${(zero[0]+(position))}deg)`;
  pointer[1].style.transform = `translate(-50%, -50%) rotate(${(zero[1]+(position))}deg)`;
}
