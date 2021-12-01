const car1 = document.querySelectorAll(".first");
const car2 = document.querySelectorAll(".secound");

const bodyGame = document.querySelector('body');
let count1 =1;
let count2 =1;

bodyGame.addEventListener('keyup', (event)=>{
    if (event.key == 'ArrowRight'){
        if (count1 < 11){
            move(car1, count1);
            count1++;
        }
        else  alert ("red car wins");

    }
    if(event.key == 'ArrowLeft'){
        if (count2 < 11){
            move(car2, count2)
            count2++;
        }
        else  alert ("yellow car wins");
    }
})

function move(array, count){
    array[count].classList.add('active');
    array[count-1].classList.remove('active');
}
