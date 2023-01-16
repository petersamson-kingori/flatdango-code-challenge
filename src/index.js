
// Your code here

// Sample codes
document.addEventListener("DOMContentLoaded",()=>{
    console.log("Content Loaded bro");
    showMovies()
})

function changeImage(){
    fetch('https://my-json-server.typicode.com/petersamson-kingori/flatdango-code-challenge/films')
    .then(resp=>resp.json())
    .then(movies => {   
    const image = document.getElementById('poster')
    image.src = movies.poster
    // console.log('link working')
}
)
}




function showMovies(){
    fetch('https://my-json-server.typicode.com/petersamson-kingori/flatdango-code-challenge/films')
    .then(resp=>resp.json())
    .then(movies => {
        
        const titles = Array.from(movies, movie => movie.title);    
        const posters = Array.from(movies, movie => movie.poster);
        console.log(posters)
        let films = document.getElementById("films");
        

        titles.forEach(titles => {
            const list = document.createElement("li");
            list.textContent = titles;
            list.addEventListener('click',changeImage)
            films.appendChild(list) 
            list.id = "new-movies"
        }
        )
        
    }
    
    )
}