const btn = document.querySelector("#btn");
const output = document.querySelector("#output");
const title =  document.querySelector("#title");
console.dir(output.innerHTML);

// btn.addEventListener('click', getJoke);
btn.addEventListener('click', joke);


// function getJoke(){
//     fetch('https://api.jokes.one/jod')
//     .then((res)=> res.json())
//     .then((data)=>{
//         console.log(data);
//         title.innerHTML = data.contents.jokes[0].joke.title;
//         output.innerHTML = data.contents.jokes[0].joke.text;
//     });
// }


async function joke(){
    const res = await fetch('https://api.jokes.one/jod');
    const data = await res.json();
    title.innerHTML = data.contents.jokes[0].joke.title;
    output.innerHTML = data.contents.jokes[0].joke.text;

}