//! autotabbing

function nextArea(current,idNum){
if (document.querySelector(`#${current}`).value.length == 1){
    document.querySelector(`#${idNum}`).focus();
    }
}

//! paste

// var inputIn = document.querySelector("#a");
// var inputIn2 = document.querySelector("#b");
// var inputIn3 = document.querySelector("#c");
// var inputIn4 = document.querySelector("#d");
// var inputIn5 = document.querySelector("#f");


const inputs = document.querySelectorAll(".inputs");

inputs.forEach((input, index)=>{
    input.addEventListener('keyup',(event)=> {
        if (input.nextSibling() && input.value){
            input.nextSibling.focus();
        }
    })
});
    

inputs.forEach((input,index)=>{
    input.addEventListener('paste', (event)=>{
        const paste = event.clipboardData.getData('text');
        const data = paste.split('');
        for(let i = 0; i< data.length; i++){
            inputs[i].value = data[i];
        }
    })
})




//897654
