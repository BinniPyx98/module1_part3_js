function pow(x, n) {
    return x ** n
}

let x = prompt("input x", '');
let n = prompt("input n", '');

if (n < 1) {
    alert(`Степень ${n} не поддерживается, используйте натуральное число`);
} else {
    alert(pow(x, n));
}