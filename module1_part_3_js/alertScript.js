
let copySorted=(arr)=>{
    
    let newArr=[...arr]
    return newArr.sort()
    
    
}

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

console.log( arr ); // CSS, HTML, JavaScript
