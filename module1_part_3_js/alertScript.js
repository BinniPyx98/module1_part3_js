let filterRange=(arr,a,b)=>{
    let newArr=arr.filter((el,index)=>{
        if (el>=a&&el<=b){
            return el
        }
    })
    return newArr
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

console.log( filtered );