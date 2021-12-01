const car1 = document.querySelectorAll(".first");
const car2 = document.querySelectorAll(".secound");

const bodyGame = document.querySelector('body');
let count1 =0;
let count2 =0;
console.dir(car1);

bodyGame.addEventListener('keyup', (event)=>{
    if (event.key == 'ArrowRight'){
        move(car1, count1);
        count1++;
    }
    if(event.key == 'ArrowLeft'){
        move(car2, count2)
        count2++;
    }
})

function move(array, count){
    array[count+1].classList.add('active');
    array[count].classList.remove('active');
}
