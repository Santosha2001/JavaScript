//array methods
let arr = [12, 34, 54, 68, 32, 15, 98, 67];
console.log(arr.length); //8
delete arr[0]; //item is deleted but position or index is still there
console.log(arr);
console.log(arr.length); //8
console.log();

let arr1 = [12, 34, 54, 68, 32, 15, 98, 67];
let arr2 = [87, 46, 23, 56, 39];
let newArr = arr1.concat(arr2);
console.log(newArr);
console.log();

console.log(arr2);
console.log(arr2.sort()); //sorts array 
console.log(arr2);
console.log();


let arr3 = [72, 64, 15, 36, 41, 32, 22];

let compare = (a, b) => {
    return a - b;
}
console.log(arr3.reverse()); //reverse array
console.log(arr3.sort(compare)); //sort with compare function
console.log();

//slice(): is used to retrive the items from speified index range.
let arr4 = [64, 43, 23, 45, 97, 89];
console.log(`sliceing items: ${arr4.slice(2, 5)}`);


//spliting array items 
let arr5 = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";
let cities = arr5.split(',');
console.log(`spliting array items: ${cities}`);

//filter() is ised to filter the elements form the array.
let filterArray = [
    { age: 22, height: 165, },
    { age: 21, height: 160, },
    { age: 22, height: 163, },
]

let ageHeight = filterArray.filter((item) => item.age > 21);

for (const ele of ageHeight) {
    console.log(ele);
}