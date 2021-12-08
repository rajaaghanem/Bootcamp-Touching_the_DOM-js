const card = document.querySelector(".card");
const searchBtn = document.querySelector(".searchBtn");
const inputBtn = document.querySelector(".input");

searchBtn.addEventListener("click", () => {
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
}

    

// movieData();

