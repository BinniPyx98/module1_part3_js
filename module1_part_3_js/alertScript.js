let vasya = {name: "aaa", age: 25};
let petya = {name: "ddd", age: 30};
let masha = {name: "ccc", age: 28};

let users = [vasya, petya, masha];

let names = []
for (let i = 0; i < users.length; i++) {
    names.push(users[i].name)
}

console.log(names); // Вася, Петя, Маша