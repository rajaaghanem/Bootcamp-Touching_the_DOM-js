const inputBtn = document.querySelector('.input');
const searchBtn = document.querySelector('#searchBtn');
const contianer = document.querySelector('.container');

let userName ="";

let arrayOfUsers =[];

searchBtn.addEventListener('click', ()=>{
    userName = inputBtn.value;
    inputBtn.value = "";
   
    if(!arrayOfUsers.includes(userName)){
        arrayOfUsers.push(userName);
        getFetch(userName);
    }
    
});


async function getFetch (searchName){
    const res = await fetch(`https://api.github.com/users/${userName}`);
    const data = await res.json();
    // console.log(data)
    creatingTheGit(data);
}

function creatingTheGit(data){
    const avatar = document.createElement('img');
    avatar.src = data.avatar_url;
    avatar.width = "200";
    avatar.height = "200";
    contianer.appendChild(avatar);

    const nameOf = document.createElement('div');
    nameOf.innerText = data.name;
    contianer.appendChild(nameOf);

    const publicRep = document.createElement('div');
    publicRep.innerText = data.public_repos;
    contianer.appendChild(publicRep);
}

