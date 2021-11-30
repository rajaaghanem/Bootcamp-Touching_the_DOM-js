const imgEl= document.querySelector("img");
const input = document.querySelector("input");
imgEl.style.display = "none";


input.addEventListener('click', (event)=>{
    if (event.target.checked) imgEl.style.display = "block";
    else imgEl.style.display = "none";
})
