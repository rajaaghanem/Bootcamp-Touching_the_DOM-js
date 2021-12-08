const  charactersArray = [];

function creatTheArray(){
    for(let i=0; i<10; i++){
        getFetch(i+1);
    }

}


async function getFetch(index){
    const res = await fetch(`https://swapi.dev/api/people/${index}/`);
    const data = await res.json();
    // console.log(data);
    charactersArray.push(data);
    // return (data.PromiseResult);
}


// charactersArray.push(getFetch(1));
// getFetch(1);

creatTheArray();
console.log(charactersArray);