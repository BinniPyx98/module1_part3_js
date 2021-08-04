function unique(arr) {
    let uniqueArr= new Set(arr)
    return uniqueArr
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log( unique(values) ); // Hare,Krishna,:-O