const container = document.querySelector(".card-container");

function pad(num, size) {
  var s = "000000000" + num;
  return s.substr(s.length-size);
}

const COLORMAP = {
  "grass": "#66CC77",
  "water": "#507DBC",
  "fire": "#f65151",
  "bug": "#7EA172",
  "normal": "#FFEEDD",
  "poison": "#8A568A",
  "electric": "#F4D35E",
  "ground": "#7B886B",
  "fairy": "#FCFAFA",
  "fighting": "#FC814A",
  "rock": "#706F6F",
  "ghost": "#94849B",
  "ice": "#9DD7FB",
  "psychic": "#00747A",
}

const createCard = (name,type,idx) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.style.backgroundColor = COLORMAP[type];
  card.innerHTML = `
  <div class="image-wrapper">
    <img src="https://pokeres.bastionbot.org/images/pokemon/${idx}.png" alt="" />
  </div>
  <div class="index">#${pad(idx,3)}</div>
  <h2 class="name">${name}</h2>
  <p class="type">type: ${type}</p>
  `
  return card;
}

const addPokemon = (data) => {
    
    const name = data.name;
    const idx = data.id;
    const type = data.types[0].type.name;
    const newCard = createCard(name,type,idx);
    container.appendChild(newCard);

}

  function getPokemon(idx = 1) {
  if (idx > 155) return
  fetch(`https://pokeapi.co/api/v2/pokemon/${idx}`)
    .then(response => response.json())
    .then(data => addPokemon(data))
    .then(() => getPokemon(idx + 1))
}

getPokemon()