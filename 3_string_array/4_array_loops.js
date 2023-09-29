//for loop
let arr = [2, 5, 4, 6, 3];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
console.log();

//for-each loop
arr.forEach((element) => {
    console.log(element * element);
})
console.log();


//for-of
for (let i of arr) {
    console.log(i);
}
console.log();

let name = "santhu";
console.log(Array.from(name)); //creates an array
console.log(name);


