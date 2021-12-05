let array = [3,6,5,4,7,8,5,54,77];

//filter method


// Array.prototype.myFilter = function(){
//         let arr=[];
//         for(let i=0; i<this.length; i++){
//             if (this[i] % 2=== 0) arr.push(this[i]);
//         }
//     return arr;
//     }

Array.prototype.myFilter = function(callBackFunction){
    let arr=[];
    for(let i=0; i<this.length; i++){
         if (callBackFunction(this[i])) arr.push(this[i]);
        }
    return arr;
}
    
let arr = array.myFilter((element)=> element%2===0);
console.log(arr);

//find method

Array.prototype.myFind = function(num){
    for(let i=0; i< this.length; i++){
        if (this[i]===num) return true;
    }
return false;
}

console.log(array.myFind(90));

//reduce method
Array.prototype.myReduce = function(callBackFunction){
    prev = this[0];

    for(let i=1; i<this.length; i++){
        prev = callBackFunction(prev, this[i]);
    }
    return prev;
}

console.log(array.myReduce((prev,curr)=> prev+=curr));