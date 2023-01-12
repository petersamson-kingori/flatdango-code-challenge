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