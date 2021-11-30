const gameBody = document.querySelector('body');
const messages = document.querySelector(".messages");
const hiddin = document.querySelector(".the-hiddin-letter");
const keyGuessedP= document.querySelector(".key-guessed");
const yesBtn = document.querySelector(".start-again");
const shoWrongLettes = document.querySelector(".show-wrong-letters");

// const lettersArray = ['a','b','c','d','e'];
const lettersArray = ['a'];
const wrongLetters = [];

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


gameBody.addEventListener('keypress', (event)=>{
    const userInput = event.key;
   if (isValidLetter(userInput)){  //the input is a letter
        
        if(isMatch(userInput))  { //there is a match
        hiddin.innerText = userInput; 
        messages.innerText = "Right letter";
        messages.style.color ="green";
        keyGuessedP.innerText = "Would you like to play again?"
        shoWrongLettes.innerText = "";
        yesBtn.style.visibility = "visible";
        
       }

       else{  // no match
            if(isLetterExist(userInput)){  //already exist in wrong letters array
                messages.innerText = `${userInput} has already been guessed`;
                messages.style.color ="red";
            }          
            else{                         //not exist in wrong letters array
                wrongLetters.push(event.key);
                shoWrongLettes.innerText = wrongLetters;
            } 
       }
                       
    } 

    else {                          //the input is NOT a letter
        messages.innerText = "Please Enter a valid letter";
        messages.style.color ="red";
    }
    
})
