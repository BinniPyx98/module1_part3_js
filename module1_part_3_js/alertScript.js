let ucFirst=(str)=>{
    if(str.length!=0){
    let newStr=str[0].toUpperCase()
    for(let i=1;i<str.length;i++){
        newStr+=str[i]
    }
    return newStr
    }
}