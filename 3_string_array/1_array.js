//arrays: like a container used to multiple items of any data types.
let marks = [98, 76, 92, 86, 75, null, "not given"];
console.log(marks);

// array types is Object
console.log(`type of array: ${typeof marks}`); //object

//to find the length of the array using the length property.
console.log(`length of array: ${marks.length}`);


//array items are numberd, access them by using index of items. starts with 0.
console.log(`accessing items using index: ${marks[0]}`);


//adding new item to exsting array.
marks[7] = 85; //adding new value
console.log(`adding new item: ${marks}`);
console.log(`array length after adding new item: ${marks.length}`);

//modifiying exsting array item.
marks[6] = 73; //changing value at a index
console.log(`modiyed value at index 6: ${marks}`);



for (let i = 0; i < marks.length; i++) {
    console.log(` ${marks[i]}`);
}
console.log("********************************************************")

let newArray = [2, 4, true, "JS", { name: "santosh" }, function () { alert("functio in array.") }];
console.log(newArray.length)
console.log(newArray[1]);
console.log(newArray[2]);
console.log(newArray[4].name);
console.log(newArray.at(-1));

console.log(newArray.toString());