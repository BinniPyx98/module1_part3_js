let camelize=(str)=>{

    let array=str.split("-");
    return  array.map(
        (word,index)=>index==0?word:word[0].toUpperCase()+word.slice(1)
    )
        .join('')
    
    
    console.log(array)
}

let a='background-color'

let b=camelize(a)
console.log(b)