let img = document.querySelector("img");
let back= document.querySelector(".back");

img.style.filter="invert(100%)"

img.addEventListener('mouseover', (event)=>{
    img.style.filter="invert(0)"
})

img.addEventListener('mouseleave', (event)=>{
    img.style.filter="invert(100%)"
})