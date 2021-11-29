let img = document.querySelector("img");

img.style.filter="invert(100%)"

img.addEventListener('mouseover', (event)=>{
    img.style.filter="invert(0)"
})

img.addEventListener('mouseleave', (event)=>{
    img.style.filter="invert(100%)"
})