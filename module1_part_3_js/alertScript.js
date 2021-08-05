let inBetween =(int1,int2)=>{
    return   (val)=>{return (val >= int1 && val < int2) }
}

let inArray=([el1,el2,el3])=>{
    return  (val)=>{
     
        return el1===val||el2===val||el3===val
        
    }
}

let arr = [1, 2, 3, 4, 5, 6, 7];
console.log( arr.filter(inArray([1, 2, 10])))
console.log( arr.filter(inBetween(3, 6)) ); // 3,4,5