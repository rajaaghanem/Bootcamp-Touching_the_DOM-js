const imgEl = document.querySelector("img");

imgEl.addEventListener('mouseover', (event)=>{
    imgEl.style.filter="invert(0)"
})

imgEl.addEventListener('mouseleave', (event)=>{
    imgEl.style.filter="invert(100%)"
})

