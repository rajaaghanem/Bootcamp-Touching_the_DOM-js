const makeAllCaps = (array)=>{
    return new Promise ((resolve, reject)=>{
        for(let i=0; i< array.length; i++){
            if (array[i].toUpperCase() === array[i].toLowerCase())
            reject("it's not a string!");
            array[i] = array[i].toUpperCase();
    };
        resolve(array);
    })
}


const sortWords = (array) =>{
    return new Promise((resolve, reject)=>{
        for(let i=0; i< array.length; i++){
            if (array[i].toUpperCase() === array[i].toLowerCase())
            reject("it's not a string!");
        };
        array.sort();
        resolve(array);
    })
}

let array1 = ["go", "1" , "hi"];
let array = ["hello", "bye", "no"];
makeAllCaps(array).then((data)=>sortWords(data).then((data)=> console.log(data)).catch((error)=> console.log(error)));
makeAllCaps(array1).then((data)=>sortWords(data).then((data)=> console.log(data)).catch((error)=> console.log(error)));