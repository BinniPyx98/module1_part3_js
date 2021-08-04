let sumSalaries=(salaries)=>{
    let sum=0
    let salariesValue=Object.values(salaries)
    for(let el of salariesValue){
        sum+=Number(el)
    }
    return sum
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

console.log( sumSalaries(salaries) ); // 650