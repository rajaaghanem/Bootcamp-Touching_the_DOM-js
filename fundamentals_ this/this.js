//Question 1:

console.log(this);

//! this is refering to window, it referces to the parent.

//Question 2:

// const myObj = {
//     name: "Timmy",
//     greet: () => {
//     console.log(`Hello ${this.name}`);
//     },
//    };
//    myObj.greet();

//! this.name is undefined because it referce to the object (his owner)
//! 
const myObj = {
    name: "Timmy",
    greet: () => {
    console.log(`Hello ${myObj.name}`);
    },
   };
   myObj.greet();

// Question 3:
//! this refere to the window - the global scope, myFunDec isnt in any other scope. 

const myFuncDec = function () {
    console.log(this);
};

myFuncDec();

// Question 4:
//! this refere to the window - the global scope, myFuncArrow isnt in any other scope. 

const myFuncArrow = () => {
    console.log(this);
   };
 myFuncArrow();


//Question 5:
//! this refere to the window - the global scope. 
document.querySelector(".element").addEventListener('click',() => {
    console.log(this);
});

//! fix it :

document.querySelector(".element").addEventListener('click',(event) => {
    let that = document.querySelector(".element");
    console.log(that);
});

//23.2

const storm = {
    superPower: "controling the weather",
    printSuperPower() {
    console.log("my superpower is " + this.superPower);
   }
}

storm.printSuperPower();

