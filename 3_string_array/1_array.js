//arrays
let marks = [98, 76, 92, 86, 75, null, "not given"];
console.log(marks);
console.log(typeof marks); //object
console.log(marks.length);

console.log();
marks[7] = 85; //adding new value
console.log(marks);
console.log(marks.length)

console.log();
marks[6] = 73; //changing value at a index
console.log(marks);

console.log();
for (let i = 0; i < marks.length; i++) {
    console.log(marks[i]);
}