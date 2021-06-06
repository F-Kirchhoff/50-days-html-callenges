
const API_KEY = "";
const API_URL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key="+API_KEY+"&page=1"

const API_IMAGE_URL = "https://image.tmdb.org/t/p/w1280"

const API_SEARCH_URL = 'https://api.themoviedb.org/3/search/movie?api_key='+API_KEY+'&query="'

const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main");

getMovies(API_URL);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchTerm = search.value;
  if (searchTerm&&searchTerm!="") {
    getMovies(API_SEARCH_URL+searchTerm);
    search.value = "";
  } else {
    window.location.reload();
  }
})



async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();

  showMovies(data.results);
}


function showMovies(movies) {
  main.innerHTML ="";
  movies.forEach( movie => {
    const {title,poster_path, vote_average,overview} = movie;

    let scoreColor;
    if (vote_average >= 7.5) {
      scoreColor = "green";
    } else if (vote_average >= 6) {
      scoreColor = "orange";
    } else {
      scoreColor = "red";
    }

    const movieEl = document.createElement("div");
    movieEl.innerHTML = `
      <div class="movie">
      <img
        src=${API_IMAGE_URL+poster_path}
        alt=""
      />
      <div class="movie-info">
        <h3>${title}</h3>
        <span class="${scoreColor}">${vote_average}</span>
      </div>
      <div class="overview">
        <h3>Overview</h3>
        ${overview}
      </div>
    </div>`
    main.append(movieEl)
  });
}

