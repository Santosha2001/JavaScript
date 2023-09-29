//FOR LOOP
for (let i = 0; i < 6; i++) {
    console.log(i);
}

console.log();

//sum of n natural numbers
const prompt = require("prompt-sync")();
let number = prompt("Enter number--> ", 0);
number = Number.parseInt(number);
let sum = 0;

for (let i = 1; i <= number; i++) {
    sum += i;
}
console.log(`Sum of N natural numbers is ${sum}`);