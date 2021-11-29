let message=document.querySelector("#message");
let btn = document.querySelector(".clickBtn");
btn.disabled = true;

message.addEventListener('keyup', (event)=>{
    if (message.value.length == 100) btn.disabled = false;
})

