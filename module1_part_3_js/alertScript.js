let camelize=(str)=>{
    let array=str.split()
    for(let i=0;i<array.length;i++){
        if(array[i]==="-"){
            upChar=array.splice(i+1,1)
            array.splice(i,1,upChar.toUpperCase())
            array[i+1]=array[i+1].toUpperCase()
        }
    }
    return array.join()
        }
        
        let a='background-color'
let b=camelize(a)
console.log(b)