const img = document.querySelector("img");

img.addEventListener('mouseover', (event)=>{
    img.style.filter="invert(0)"
})

img.addEventListener('mouseleave', (event)=>{
    img.style.filter="invert(100%)"
})