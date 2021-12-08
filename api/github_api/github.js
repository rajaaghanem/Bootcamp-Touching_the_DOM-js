const inputBtn = document.querySelector('.input');
const searchBtn = document.querySelector('#searchBtn');
const contianer = document.querySelector('.container');

let userName ="";

let arrayOfUsers =[];

searchBtn.addEventListener('click', ()=>{
    userName = inputBtn.value;
   
    if(!arrayOfUsers.includes(inputBtn.value)){
        arrayOfUsers.push(inputBtn.value);
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
    contianer.appendChild(avatar);

    const nameOf = document.createElement('div');
    nameOf.innerText = data.name;
    contianer.appendChild(nameOf);

    const publicRep = document.createElement('div');
    publicRep.innerText = data.public_repos;
    contianer.appendChild(publicRep);

    arrayOfUsers.push(contianer.innerHTML);
}
