import { dynamicGradient } from "./dynamicGradient.js";


const logo = document.getElementById('logo');
const input = document.querySelector('.list-container input');
const todolist = document.querySelector('.todolist');

const todos = [].concat(JSON.parse(localStorage.getItem('todos')));

todos.forEach(item => addItemToList(item));

input.addEventListener('keydown', e => {
  if (![9,13].includes(e.keyCode) ) return


  const itemText = e.target.value;
  addItemToList(itemText);

  updateLocalStorage();

  input.value = '';
  setTimeout(_ => input.focus(), 10);
})


// creating logo and input color animation

const firstNodeColors = ['#27233A','#163C3C','#3F93CA','#D2EEEE','#EFA00B','#D58936','#28112B'];
const secondNodeColors = ['#742634','#3F93CA','#5C7C83','#1A4460','#C86519','#C1292E','#FF5CAD'];


dynamicGradient(firstNodeColors,secondNodeColors, 14000, logo);
dynamicGradient(firstNodeColors,secondNodeColors, 14000, input);



function updateLocalStorage() {
  const items = [...todolist.querySelectorAll('p')];
  const itemArray = items.map(item => item.innerHTML).reverse();
  localStorage.setItem('todos',JSON.stringify(itemArray))
}


function addItemToList(content) {
  const newItem = createItem(content);
  todolist.prepend(newItem);
}

function createItem (content) {

  const newListItem = document.createElement('div');
  newListItem.classList.add('item');
  
  newListItem.innerHTML =`
    <p contenteditable="true">${content}</p> <i class="fas fa-times"/>
  `

  newListItem.querySelector('i').addEventListener('click', e => {
    e.target.parentNode.remove();
    updateLocalStorage();
  })

  return newListItem;

}

