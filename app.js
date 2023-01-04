import API_KEY from "./apikeys.js";

fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&t=batman`)
.then(response => response.json())
.then(data => console.log(data));


