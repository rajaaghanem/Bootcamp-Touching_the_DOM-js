const myPromise = (num) =>{
    return new Promise((resolve, reject)=>{
        if(num > 10){
            resolve("greater than 10");
        }
        else reject("less than 10");
    })
}

myPromise(11).then ((data)=> console.log(data)).catch((data)=> console.log(data));
