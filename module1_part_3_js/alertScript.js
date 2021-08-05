function makeCounter() {
    
    function counter() {
        return counter.count++;
    };
    counter.set=(value)=>{counter.count=value}
    counter.decrease=()=>{return counter.count--}
    
    counter.count = 0;
    
    return counter;
}

let counter = makeCounter();

counter.count = 10;
