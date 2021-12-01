let inputDirection ={x:0, y:0};

window.addEventListener('keyup', e=>{
    switch(e.key){
        case 'ArrowUp':
            inputDirection= {x:0, y:-1};
            break;
        case 'ArrowDown':
            inputDirection={x:0, y:1};
            break;
        case 'ArrowLeft':
            inputDirection={x:-1, y:0};
            break;
        case 'ArrowUp':
            inputDirection={x:1, y:0};
          
    }
})



export function getInputDirection(){
    return inputDirection;
}