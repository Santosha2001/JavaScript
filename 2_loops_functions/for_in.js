//for-in loop
//used for iterating keys of the object
let obj = {
    "Santosh": 78,
    "Sameer": 86,
    "Abhi": 79,
    "Ravi": 89
}

for (let key in obj) {
    console.log(`Marks of ${key} are ${obj[key]}`);
}

console.log();

//for-of
for (let a of "santosh") {
    console.log(a);
}