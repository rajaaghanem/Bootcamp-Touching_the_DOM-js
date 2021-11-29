let content = document.querySelector(".card_content");
let content2 = document.querySelector(".card_content2");
let cardBtn= document.querySelector(".card");
let cardBtn2= document.querySelector(".card2");


var word ="";
var word2 = "";
cardBtn.addEventListener('click', (event)=>{
    content.style.visibility="visible";
    word = content.Value;
})

cardBtn2.addEventListener('click', (event)=>{
    content2.style.visibility="visible";
    word2 = content2.value;
})

cardBtn2.addEventListener('click', (event)=>{
    if (word==word2) alert("you Win!")
})
