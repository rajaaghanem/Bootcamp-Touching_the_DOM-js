let txt = document.querySelector(".txt");
const up = document.querySelector(".up");
const down = document.querySelector(".down");

console.dir(txt);
up.addEventListener('click', (event)=>{
    txt.style.fontSize="40px";
    txt.style.color = "red";
});

down.addEventListener('click', (event)=>{
    txt.style.fontSize="13px";
    txt.style.color = "blue";
});
