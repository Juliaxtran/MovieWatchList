import API_KEY from "./apikeys.js";
const form = document.querySelector("form");
let searchValue;
const searchBar = document.getElementById("search-bar");
const movieList = document.getElementsByClassName("movie-list");





form.addEventListener("submit", (e) => {
  e.preventDefault();
  searchValue = searchBar.value;
  searchBar.value = "";
  fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchValue}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      const movies = data.Search;
      movies.forEach(movie => {
        const movieItem = document.createElement("div");
        movieItem.classList.add("movie-item");
        movieItem.innerHTML = `
         <img class="movie-img" src=${movie.Poster} alt="movie poster"/>
          <div class="movie-info">
          <div class="movie-info-top">
            <h3 class="movie-title">${movie.Title}</h3>
            <div class="rating">
              <span style="color:rgb(222, 222, 33)">&#9733;</span>
              <span class="movie-rating">8.1</span>
            </div>

          </div>
          <div class="movie-info-bottom">
            <p class="movie-time"><strong>164 min</strong></p>
            <p class="movie-category">${movie.Type}</p>
            <div class="watchlist">
              <img src="./add.png" alt="add to watchlist" class="add-icon"/>
              <p>Watchlist</p>
            </div>
          </div>
          <p class="overview">
            A blade runner must pursue and try to terminate four replicants who stole a ship in space and have returned to Earth to find their creator.
          </p>
        </div>
        </div>`
        movieList[0].appendChild(movieItem);
      })
    });

});