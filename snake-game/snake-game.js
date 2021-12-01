
import {update as updateSnake, draw as drawSnake, SNAKE_SPEED} from '/snake.js'
import  { update as updateFood, draw as drawFood} from '/food.js'

let lastRenderTime = 0;
const gameBoard = document.querySelector("#game-board");


function main(currentTime){
    window.requestAnimationFrame(main)
    const secoundsSinceLastRender = (currentTime-lastRenderTime)/1000;
    if(secoundsSinceLastRender < 1 / SNAKE_SPEED) return;
    lastRenderTime = currentTime;

    update();
    draw();
}

window.requestAnimationFrame(main)

function update(){
    updateSnake();
    updateFood();
}

function draw(){
    gameBoard.innerHTML="";
    drawSnake(gameBoard);
    drawFood(gameBoard);
}