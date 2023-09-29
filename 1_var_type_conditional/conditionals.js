// const prompt = require("prompt-sync")();

let age = prompt("your age--> ", 21);
age = Number.parseInt(age);
console.log(`age is ${age}`);
console.log(typeof age);

if (age <= 0) {
    console.log(`${age} is not valid`);
}
else if (age < 18) {
    console.log(`${age} is less then 18`);
}
else {
    console.log(`${age} is greater then 18`);
}

console.log();

console.log("Ternary operator");
let getAge = prompt("Age is--> ");
console.log("age is", getAge < 18 ? "less" : "greater");