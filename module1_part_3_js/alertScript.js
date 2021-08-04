let sortByAge=(arr)=>{
    arr.sort((a,b)=>a.age-b.age)
}

let vasya = {name: "aaa", age: 25};
let petya = {name: "ddd", age: 30};
let masha = {name: "ccc", age: 28};

let users = [vasya, petya, masha];

sortByAge(users)

console.log(users); // Вася, Петя, Маша