
const screens = [...document.querySelectorAll('.screen')];
const startBtn = document.getElementById('btn-start');
const insectBtns = [...document.querySelectorAll('.choose-insect-btn')];
const time = document.querySelector('.time');
const score = document.querySelector('.score');
const msg = document.querySelector('.msg');
const gameContainer = document.querySelector('.game');

let state = {
  insect: null,
  score: 0,
  time: 0,
  gameStarted: false,
}

const INSECTLIST = {
  'fly': 'http://pngimg.com/uploads/fly/fly_PNG3946.png',
  'wasp': 'http://pngimg.com/uploads/wasp/wasp_PNG3.png',
  'bug': 'http://pngimg.com/uploads/bug/bug_PNG3994.png',
}

console.log(startBtn)

startBtn.addEventListener('click', _ => screens[0].classList.add('up'));

insectBtns.forEach(btn => {
  btn.addEventListener('click', e => {

    const insect = btn.children[0].innerText;
    screens[1].classList.add('up');

    setTimeout( _ => game(insect), 3000);

  })
})

function game(insect) {

  if(state.gameStarted) return;

  state.insect = insect;
  state.time = 0;
  state.score = 0;
  state.gameStarted = true;

  setInterval(tick,1000);

  spawnInsect();

}


function spawnInsect() {

  const insect = document.createElement('img');
  insect.classList.add('insect');
  insect.src = INSECTLIST[state.insect];

  const [x,y] = getRandomCoords();

  insect.style.top = `${y}px`;
  insect.style.left = `${x}px`;
  insect.style.transform = `rotate(${Math.floor(Math.random() * 360)}deg)`;

  insect.addEventListener('click', handleInsectClick );
  gameContainer.appendChild(insect);

}

function handleInsectClick(e) {

  e.target.remove();

  updateScore()

  if (state.score === 20) showMsg();

  spawnInsect();
  spawnInsect();

}

function updateScore() {
  state.score = state.score + 1;
  score.innerText = `Score: ${state.score}`
}

function showMsg() {
  msg.style.display = 'block';
}
function getRandomCoords() {

  const x = Math.floor(Math.random() * (window.innerWidth - 200) + 100);
  const y = Math.floor(Math.random() * (window.innerHeight - 200) + 100);
  
  return [x,y];
}


function tick() {
  state.time = state.time + 1;
  console.log({time: state.time})
  updateTime()
}

function updateTime() {

  const min = `${Math.floor(state.time / 600) % 10 }${Math.floor(state.time / 60) % 10 }`
  const sec = `${Math.floor(state.time / 10) % 6 }${Math.floor(state.time) % 10 }`
  time.innerText = `time: ${min}:${sec}`
}