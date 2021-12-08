const card = document.querySelector(".card");
const searchBtn = document.querySelector(".searchBtn");
const inputBtn = document.querySelector(".input");

searchBtn.addEventListener("click", () => {
    card.innerHTML="";
    movieName = inputBtn.value;
    inputBtn.value = "";
    // movieName = "game of thrones";
    movieName = movieName.split(" ").join('+');
    console.log(movieName);

    getFetch(movieName);
  });


async function  getFetch(movieName){
    const res = await fetch(`http://www.omdbapi.com/?apikey=7b76035d&t=${movieName}`);
    const data= await res.json();    
    console.log(data);
    creatMovie(data);
}

function creatMovie(data){
    const poster = document.createElement("img");
    poster.src = data.Poster;
    poster.width = "200";
    poster.height = "200";
    card.appendChild(poster);

    const title = document.createElement('h2');
    title.innerText = data.Title;
    card.appendChild(title);

    const genre = document.createElement('p');
    genre.innerText = data.Genre;
    card.appendChild(genre);

    const year = document.createElement('p');
    year.innerText = data.Year;
    card.appendChild(year);

    const plot =  document.createElement('p');
    plot.innerText = data.Plot;
    card.appendChild(plot);

    const director =  document.createElement('p');
    director.innerText = data.Director;
    card.appendChild(director);

    const actors =  document.createElement('p');
    director.innerText = data.Actors;
    card.appendChild(actors);

    const ratings = document.createElement('p');
    for(let i = 0; i<data.Ratings.length; i++){
        ratings.innerText += ` ${i+1}- the ${data.Ratings[i].Source} is: ${data.Ratings[i].Value} `;
    }
    card.appendChild(ratings);
}
    


