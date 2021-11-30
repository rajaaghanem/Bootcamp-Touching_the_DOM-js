const gameBody = document.querySelector('body');
const messages = document.querySelector(".messages");
const lettersArray = ['a','b','c','d','e'];
const wrongLetters = [];

random = Math.floor(Math.random() * lettersArray.length);
let secretLetter = lettersArray[random];
let startFlag = true;

//check if the user input is a valid letter
function isValidLetter(input){
   return (input.toUpperCase() === input.toLowerCase())?  false:true;

}

// check if the user input is already exist in the wrong letters array
function isLetterExist(input){
   return (wrongLetters.includes(input))? true:false;
    
}


gameBody.addEventListener('keypress', (event)=>{
    const userInput = event.key;
   if (isValidLetter(userInput)){   //the input is a letter
     
       if(isLetterExist(userInput)){ 
        messages.innerText = `${userInput} has already been guessed`;
        messages.style.color ="red";
       }          
       else wrongLetters.push(event.key);
           
    } 

    else {                          //the input is NOT a letter
        messages.innerText = "Please Enter a valid letter";
        messages.style.color ="red";
    }
    

})

console.log(wrongLetters);