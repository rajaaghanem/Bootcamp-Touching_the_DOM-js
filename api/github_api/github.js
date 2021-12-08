const inputBtn = document.querySelector('.input');
const searchBtn = document.querySelector('#searchBtn');

let userName ="";

searchBtn.addEventListener('click', ()=>{
    userName = inputBtn.value;
});

console.log(userName);

