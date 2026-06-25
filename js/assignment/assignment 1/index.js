// Q1

let a = 4
let b = 5
let add = a+b

console.log(add);

// Q2

function Is_Valid(A, B) {
    return (A < 10 && A > B);
}

console.log(Is_Valid(8, 5));   // true
console.log(Is_Valid(12, 5));  // false
console.log(Is_Valid(8, 10));  // false


// Q3

function Check(A, B) {
    return (A % 10 === 0 || B % 10 === 0);
}

console.log(Check(12, 20)); // true
console.log(Check(20, 30)); // true
console.log(Check(11, 21)); // false
console.log(Check(10, 25)); // true

//Q4
function First_Digit(N) {
    return Math.floor(N / 1000);
}
console.log(First_Digit(4567)); // 4
console.log(First_Digit(9876)); // 9