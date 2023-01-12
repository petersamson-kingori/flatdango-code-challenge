// Your code here

document.addEventListener("DOMContentLoaded",()=>{
    console.log("Content Loaded bro");
    showMovies()
})

function showMovies(){
    fetch(' http://localhost:3000/films')
    .then(resp=>resp.json())
    .then(movies => {
        console.log(movies)
    })
}