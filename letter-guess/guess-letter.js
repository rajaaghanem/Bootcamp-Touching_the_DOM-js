const gameBody = document.querySelector('body');
const messages = document.querySelector(".messages");
const hiddin = document.querySelector(".the-hiddin-letter");
const keyGuessedP= document.querySelector(".key-guessed");
const yesBtn = document.querySelector(".start-again");
const shoWrongLettes = document.querySelector(".show-wrong-letters");

const lettersArray = ['a','b','c','d','e'];
// const lettersArray = ['a'];
let wrongLetters = [];

random = Math.floor(Math.random() * lettersArray.length);
let secretLetter = lettersArray[random];
let startFlag = true;
yesBtn.style.visibility = "hidden";

//check if the user input is a valid letter
function isValidLetter(input){
   return (input.toUpperCase() === input.toLowerCase())?  false:true;

}

// check if the user input is already exist in the wrong letters array
function isLetterExist(input){
   return (wrongLetters.includes(input))? true:false;
    
}

//check if the guess matches the secret letter
function isMatch(input){
   return (input == secretLetter)? true:false;
}

//reset to the initial values
function resetFun(){
    random = Math.floor(Math.random() * lettersArray.length);
    let secretLetter = lettersArray[random];
    messages.innerText = "Guess a letter";
    messages.style.color = "black";
    hiddin.innerText = "?";
    keyGuessedP.innerText = "Key guessed";
    shoWrongLettes.innerText = "";
    wrongLetters = [];
}

gameBody.addEventListener('keypress', (event)=>{
    const userInput = event.key;
if (startFlag){
   if (isValidLetter(userInput)){  //the input is a letter
        
        if(isMatch(userInput))  { //there is a match
        hiddin.innerText = userInput; 
        messages.innerText = "Right letter";
        messages.style.color ="green";
        keyGuessedP.innerText = "Would you like to play again?"
        shoWrongLettes.innerText = "";
        yesBtn.style.visibility = "visible";
        startFlag = false;
        
       }

       else{  // no match
            if(isLetterExist(userInput)){  //already exist in wrong letters array
                messages.innerText = `${userInput} has already been guessed`;
                messages.style.color ="red";
            }          
            else{           
                messages.innerText = "Nope, wrong letter";              //not exist in wrong letters array
                wrongLetters.push(event.key);
                shoWrongLettes.innerText = wrongLetters;
            } 
       }
                       
    } 

    else {                          //the input is NOT a letter
        messages.innerText = "Please Enter a valid letter";
        messages.style.color ="red";
    }
    
}

})

yesBtn.addEventListener('click',(event)=> {
    startFlag=true;
    resetFun();

})

