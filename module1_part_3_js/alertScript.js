let checkSpam=(str)=>{
    let newStr=str.toUpperCase()
    if(newStr==='VIAGRA'||'XXX'){
        return true
    }
    else{
        return false
    }
}