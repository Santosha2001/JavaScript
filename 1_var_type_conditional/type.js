// DATATYPES
//1.primitive datatype--> NN SS BB U
let a = 10;
let b = null;
let c = "Hello!";
let d = Symbol("it is symbol");
let e = false;
let f = BigInt("7022590204");
let g = undefined;

console.log(a, b, c, d, e, f, g);
console.log();

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);
console.log(typeof f);
console.log(typeof g);

console.log();

//2.Objects--> non-primitive
const obj = {
    "name": "Santosh",
    "age": 22,
    "student": true
}
console.log(obj);
console.log(typeof obj);