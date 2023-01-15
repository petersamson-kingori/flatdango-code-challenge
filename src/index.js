
// Your code here

// Sample codes
document.addEventListener("DOMContentLoaded",()=>{
    console.log("Content Loaded bro");
    showMovies()
})



function showMovies(){
    fetch('https://my-json-server.typicode.com/petersamson-kingori/flatdango-code-challenge/films')
    .then(resp=>resp.json())
    .then(movies => {
        
        const titles = Array.from(movies, movie => movie.title);
        const images = Array.from(movies, poster => poster.poster);
        
        let films = document.getElementById("films");
        let imgPoster = document.getElementById("poster")
        

        titles.forEach(titles => {
            const list = document.createElement("li");
            list.addEventListener("click",showMovieTitle())
            list.textContent = titles
            films.appendChild(list)
            showMovieTitle()
                        
        })
        imgPoster.forEach(poster =>{


        })

        function showMovieTitle(){
            let posterImg = imgPoster; 
        }

    


        // newListItem = document.createElement("li")
        // newListItem.classList.add("film", "item");
        // newListItem.innerText = "New Movie Title";
        // films.appendChild(newListItem);
                
        
        
    })
}