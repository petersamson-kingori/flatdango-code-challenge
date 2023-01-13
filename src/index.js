// Your code here

document.addEventListener("DOMContentLoaded",()=>{
    console.log("Content Loaded bro");
    showMovies()
})

function showMovies(){
    fetch('https://my-json-server.typicode.com/petersamson-kingori/flatdango-code-challenge/films')
    .then(resp=>resp.json())
    .then(movies => {
        console.log(movies)
    })
}

let button = document.getElementById('buy-ticket');
button.addEventListener('click',function(){
    console.log("button works")
})

// add new movie to left menu
let films = document.getElementById("films");
newListItem = document.createElement("li")
newListItem.classList.add("film", "item");
newListItem.innerText = "New Movie Title";
films.appendChild(newListItem);