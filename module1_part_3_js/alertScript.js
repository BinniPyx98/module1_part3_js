function Calculator(){
    this.calculator=function (str){
        let  operrator=str.slice(' ')
        let result= this.methods[operrator[1]](Number(operrator[0]),Number(operrator[2]))
        console.log(result)
    }
    this.methods={
        '+':(a,b)=>{return a+b},
        '-':(a,b)=>{return a-b}
    }
    this.addMethod=function (str,func){
        this.methods[str]=func
    }
}

let cal=new Calculator
// cal.calculator('1+2')
cal.addMethod("*",(a,b)=>a*b)
cal.calculator("2*2")