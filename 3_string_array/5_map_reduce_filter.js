//map()==>creates new array on performing operations
// map(value,index,array)
let arr = [34, 21, 43, 56];

let arr1 = arr.map((value) => {
    console.log(value)
    // console.log(value,index,array);
    return value + 1;
})
console.log(arr1);
console.log();


//filter()==>filters the items and returns them
let arr2 = [28, 3, 74, 2, 10, 9, 43];
let a = arr2.filter((value) => {
    return value < 10;
})
console.log(a);
console.log(arr2);
console.log();


//reduce==>reduces an array to single value
let arr3 = [2, 5, 3, 7, 9, 2, 0];
let b = arr3.reduce((n1, n2) => {
    return n1 + n2;
})
console.log(b);



