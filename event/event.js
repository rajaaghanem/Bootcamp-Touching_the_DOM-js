//! autotabbing

const inputs = document.querySelectorAll(".inputs");

inputs.forEach((input, index)=>{
    input.addEventListener('keyup',(event)=> {
        if (input.nextSibling() && input.value){
            input.nextSibling.focus();
        }
    })
});

//! paste

inputs.forEach((input)=>{
    input.addEventListener('paste', (event)=>{
        const paste = event.clipboardData.getData('text');
        const data = paste.split('');
        for(let i = 0; i<data.length; i++){
            inputs[i].value = data[i];
        }
    })
})

//extra 

inputs.forEach((input)=>{
    input.addEventListener('paste', (event)=>{
        const paste = event.clipboardData.getData('text');
        const data = paste.split('');
        input.value = data;
    })
})

