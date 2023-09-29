//functions
let num1 = 3;
let num2 = 5;

function sum(a, b) {
    return a + b;
}

let c = sum(num1, num2);
console.log(`sum of ${num1} and ${num2} is ${c}`);

console.log();

//arrow function
const addNumbers = (x, y) => {
    let sum = x + y;
    return sum;
}
// let sumOfNumbers = addNumbers(num1,num2);
console.log(`Sum of ${num1} and ${num2} using arrow function is ${addNumbers(num1, num2)}`);