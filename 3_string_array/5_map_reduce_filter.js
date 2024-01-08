//map()==>creates new array on performing operations
// map(value,index,array)
//map() usaed to perform opertations on each array items.
let arr = [34, 21, 43, 56];
let arr1 = arr.map((value) => {
    console.log(value)
    return value + 1;
})
console.log(arr1);

let arrMap = [2, 4, 5];
let square = arrMap.map((num) => num * 2);
console.log(`sqaring the items using map(): ${square}`);


//filter()==>filters the items and returns new array
let arr2 = [28, 3, 74, 2, 10, 9, 43];
let a = arr2.filter((value) => {
    return value < 10;
})
console.log(`filters items using filter(): ${a}`); //3,2,9


//reduce==>reduces an array to single value
let arr3 = [2, 5, 3, 7, 9, 2, 0];
let b = arr3.reduce((n1, n2) => {
    return n1 + n2;
})
console.log(`reduce() reduces the array into a single value: ${b}`);

//filter(), map(), 
let filterArray = [
    { age: 22, height: 165, },
    { age: 21, height: 160, },
    { age: 22, height: 163, },
]

//filter
let ageHeight = filterArray.filter((item) => item.age > 21);

for (const ele of ageHeight) {
    console.log(ele);
}
console.log("**************************")

let map = filterArray.map((item) => item.height);

for (const ite of map) {
    console.log(ite)
}

//sort() to elements in order.
let compare = (num1, num2) => {
    if (num1 > num2) return 1;
    if (num1 == num2) return 0;
    if (num1 < num2) return -1;
}

let numberArray = [3, 2, 94, 22];

console.log(numberArray.sort(compare));