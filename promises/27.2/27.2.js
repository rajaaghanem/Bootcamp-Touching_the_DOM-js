const makeAllCaps = (array)=>{
    return new Promise ((resolve, reject)=>{
        for(let i=0; i< array.length; i++){
            if(typeof array[i] !== "string" || (array[i].toUpperCase() === array[i].toLowerCase()))
            reject("it's not a string!");
            array[i] = array[i].toUpperCase();
    };
        resolve(array);
    })
}


const sortWords = (array) =>{
    return new Promise((resolve, reject)=>{
        for(let i=0; i< array.length; i++){

            if(typeof array[i] !== "string" || (array[i].toUpperCase() === array[i].toLowerCase()))
            reject("it's not a string!");
        };
        array.sort();
        resolve(array);
    })
}


let array1 = ["go", "AA" ,123, "22", "hi"];
let array2 = ["hello", "bye", "no"];
makeAllCaps(array2).then((data)=>sortWords(data).then((data)=> console.log(data)).catch((error)=> console.log(error)));
makeAllCaps(array1).then((data)=>sortWords(data).then((data)=> console.log(data)).catch((error)=> console.log(error)));