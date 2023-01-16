
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
        const posters = Array.from(movies, movie => movie.poster);
        let films = document.getElementById("films");
        
        

        titles.forEach(titles => {
            const list = document.createElement("li");
            list.textContent = titles
            films.appendChild(list) 
            list.addEventListener("click",()=>{
                    
                      const imageLink = movies.poster;
                      const imgElement = document.getElementById('poster');
                      imgElement.src = imageLink;
                    });

                // console.log("Ive been clicked")
            })    
        })  
        
    }

