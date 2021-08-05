function sumTo(number) {
    if (number === 1) return 1;
    return number + sumTo(number - 1);
}

alert( sumTo(100) );