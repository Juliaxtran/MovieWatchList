import API_KEY from "./apikeys.js";
const form = document.querySelector("form");
let searchValue;
const searchBar = document.getElementById("search-bar");





form.addEventListener("submit", (e) => {
  e.preventDefault();
  searchValue = searchBar.value;
  searchBar.value = "";
  fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchValue}`)
    .then(response => response.json())
    .then(data => console.log(data));

});   