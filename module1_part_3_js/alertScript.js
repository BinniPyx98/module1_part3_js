let aclean = (inputArr) => {
    
    let arr = [...inputArr]
    let newSetArr = new Set
    let testArr =null
    let result = []
    
    for (let i = 0; i < arr.length; i++) {
        testArr = arr[i].toUpperCase().split("").sort().join()
        
        if (!newSetArr.has(testArr)) {
            newSetArr.add(testArr)
            result.push(inputArr[i])
        }
    }
    
    console.log(newSetArr)
    return result
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr)); // "nap,teachers,ear" or "PAN,cheaters,era"