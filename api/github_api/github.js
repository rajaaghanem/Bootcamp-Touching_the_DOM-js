const inputBtn = document.querySelector('.input');
const searchBtn = document.querySelector('#searchBtn');
const contianer = document.querySelector('.container');

let userName ="";

let arrayOfUsers =[];

searchBtn.addEventListener('click', ()=>{
    userName = inputBtn.value;
    inputBtn.value = "";
   
    if(!arrayOfUsers.includes(userName) && userName!==""){
        arrayOfUsers.push(userName);
        getFetch(userName);
    }
    
});


async function getFetch (searchName){
    try{
        const res = await fetch(`https://api.github.com/users/${userName}`);
        console.log(res);
        const data = await res.json();
        console.log(data);
        creatingTheGit(data);
    }
   catch(error){
    console.log("invalid user name");
   }
}

function creatingTheGit(data){
    const link = document.createElement('a');
    link.href = data.html_url;
    link.setAttribute('target', '_blank');
    contianer.appendChild(link);

    const avatar = document.createElement('img');
    avatar.src = data.avatar_url;
    avatar.width = "200";
    avatar.height = "200";
    link.appendChild(avatar);

    const nameOf = document.createElement('div');
    nameOf.innerText = data.name;
    link.appendChild(nameOf);

    const publicRep = document.createElement('div');
    publicRep.innerText = data.public_repos;
    link.appendChild(publicRep);
}

