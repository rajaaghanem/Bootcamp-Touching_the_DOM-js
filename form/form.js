const btn = document.querySelector(".suBtn");
const txt = document.querySelector(".text");
const userName = document.querySelector(".userName");
const email = document.querySelector(".email");
const age = document.querySelector(".age");
const confirmF = document.querySelector(".confirmation");
const change = document.querySelector(".change");

txt.style.display="none";

// let flag=true;

// btn.addEventListener('click', (event)=>{
   
//     if (flag) {
//     txt.innerText = `your name is: ${userName.value}  your email is: ${email.value} your age is:${age.value}`;
//     txt.style.display="block";
//     confirmF.addEventListener('click', (evt)=> {
//         alert("congratulations you successfully sent this form");
//         flag = true;
//     }
//     })
//     change.addEventListener('click', (e)=>{
//         flag=false;
//         event.preventDefault();
//     })   
// });


btn.addEventListener('click', (event)=>{
    event.preventDefault();
    txt.innerText = `your name is: ${userName.value}  your email is: ${email.value} your age is:${age.value}`;
    txt.style.display="block";


})

confirmF.addEventListener('click', (evt)=>{
    alert("congratulations you successfully sent this form");
    resetForm();
});

change.addEventListener('click', (e)=>
txt.style.display="none") 

function resetForm(){
    userName.value="";
    email.value="";
    age.value="";
    txt.style.display="none";
    txt.innerText ="";
}