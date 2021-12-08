const card = document.querySelector(".card");
const searchBtn = document.querySelector(".searchBtn");
const inputBtn = document.querySelector(".input");

searchBtn.addEventListener("click", () => {
    card.innerHTML="";

    movieName = inputBtn.value;
    inputBtn.value = "";
    // movieName = movieName.split(" ").join('+');
    getFetch(movieName);
  });


async function  getFetch(movieName){
    const res = await fetch(`http://www.omdbapi.com/?apikey=7b76035d&t=${movieName}`);
    const data= await res.json(); 
    if(data.Response === "True")
    creatMovie(data);
    else console.log("Error");
    
}
// data
function creatMovie({Poster,Title, Genre, Year, Plot,Director, Actors, Ratings}){
    const poster = document.createElement("img");
    poster.src = Poster;
    poster.width = "200";
    poster.height = "200";
    card.appendChild(poster);

    const title = document.createElement('h2');
    title.innerText = Title;
    card.appendChild(title);

    const genre = document.createElement('p');
    genre.innerText = `Genre: ${Genre}`;
    card.appendChild(genre);

    const year = document.createElement('p');
    year.innerText = `Year: ${Year}`;
    card.appendChild(year);

    const plot =  document.createElement('p');
    plot.innerText = `Plot: ${Plot}`;
    card.appendChild(plot);

    const director =  document.createElement('p');
    director.innerText = `Director: ${Director}`;
    card.appendChild(director);

    const actors =  document.createElement('p');
    director.innerText = `Actors: ${Actors}`;
    card.appendChild(actors);

    const ratings = document.createElement('p');
    ratings.innerText= "Rating: " 
    for(let i = 0; i<data.Ratings.length; i++){
        ratings.innerText += ` ${i+1}- the ${Ratings[i].Source} is: ${Ratings[i].Value} `;
    }
    card.appendChild(ratings);
}
    


