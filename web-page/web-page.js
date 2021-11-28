
const newDiv = document.createElement("div");
let h1=document.createElement('h1');
h1.textContent = "I'm using only js";
h1.style.color="red";
let img = document.createElement("img")
img.src = "/IMG-20210920-WA0052.jpg"
img.width = 400;
img.style.border = "5px solid red"

newDiv.appendChild(h1);
newDiv.appendChild(img);
document.querySelector("html").appendChild(newDiv)