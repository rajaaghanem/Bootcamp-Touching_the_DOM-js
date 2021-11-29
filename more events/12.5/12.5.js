let txt = document.querySelector(".text");
let btn = document.querySelector(".btn");
let container = document.querySelector(".images");

txt.addEventListener('keyup', (event)=>{
    btn.addEventListener('click',(event)=>{
        if (isNaN(txt.value))
        alert("not a number!");
     })

     btn.addEventListener('click',(event)=>{
        if (!isNaN(txt.value))
        for(let i=0; i<txt.value; i++){
            const img=document.createElement('img');
            img.src="/1024px-Oxygen480-emotes-face-smile-big.svg.png";
            img.style.width="100px";
            container.appendChild(img);
        }
        txt.value=" ";
     })

})