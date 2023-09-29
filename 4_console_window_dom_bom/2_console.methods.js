//console methods
console.log("hi");

console.log(console); //lists all console methods

console.assert(2 > 4);
console.assert(8 > 4);

// console.clear() // screen clears

console.error("hello");

let obj = { a: 2, b: 4, c: 3 };
console.table(obj);  //converts object into table form

console.warn("viwing warnings");

console.info("information");

console.time(obj);
console.timeEnd(obj); //how much time taken to complete process


console.time("for loop");
for (let index = 0; index < 5; index++) {
    console.log("for loop")
}
console.timeEnd("for loop");

console.time("while loop");
let i = 0;
while (i < 5) {
    console.log("while")
    i++;
}
console.timeEnd("while loop");



