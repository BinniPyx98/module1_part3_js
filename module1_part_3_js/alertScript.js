let byField=(str)=>{
    return (val1,val2)=>val1.str>val2.str?1:-1
}

let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];

users.sort((a, b) => a.name > b.name ? 1 : -1);
users.sort((a, b) => a.age > b.age ? 1 : -1);
console.log(users)