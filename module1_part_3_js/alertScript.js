let getAverageAge=(users)=>{
    let iterator=0;
    let sum=users.reduce((acc,val)=>{
        iterator++
        return acc+val.age
    },0)
    sum/=iterator
    console.log(sum)
}

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

getAverageAge(arr)  // (25 + 30 + 29) / 3 = 28