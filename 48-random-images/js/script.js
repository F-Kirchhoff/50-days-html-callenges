
import { dynamicGradient } from './dynamicGradient.js';

const container = document.querySelector('.image-container');

const firstNodeColors = ['#ddd','#333','#666'];
const secondNodeColors = ['#eee','#555','#222'];


const imageEls = [...Array(15).keys()].map( el => document.createElement('div'));

imageEls.forEach( div => {
  div.classList.add('image');
  container.appendChild(div);
  dynamicGradient(firstNodeColors,secondNodeColors,8000,div)
});

delayedImageFetch(imageEls)




function delayedImageFetch (elList, current=0) {

  if(current >= elList.length) return

  const currentDiv = elList[current];

  const newImg = document.createElement('img');

  newImg.src = `https://source.unsplash.com/random/${getRandomSize()}`;

  console.log(getRandomSize())

  currentDiv.appendChild(newImg);
  setTimeout( _ => delayedImageFetch(elList,current+1),0);

} 



function getRandomSize(){
  return `${getRandNum()}x${getRandNum()}`
}

function getRandNum(){
  return 300 + Math.floor(Math.random() * 80)
}