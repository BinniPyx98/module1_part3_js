// let printNumbers=(from, to)=> {
//     let current = from
//     let inter = setInterval(() => {
//         if (from == to) {
//             clearInterval(inter)
//         } else {
//             console.log(from)
//             from++
//         }
//     }, 1000)
// }
let printNumbers=(from,to)=>{
    let current=from
    let time=setTimeout(function test(){
        if(current===to){
            clearTimeout(time)
        }else {
            console.log(current)
            current++
           setTimeout(test,1000)
        }
    },1000)
}
printNumbers(5, 10);