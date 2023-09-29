//array methods
let arrDemo = [81, 32, 34, 5, 83];
console.log(arrDemo);
console.log(typeof arrDemo); //object

console.log();
let a = arrDemo.toString(); //converts array into string
console.log(`${a} type is-->${typeof a}`);
console.log(); //string

let arrJoin = arrDemo.join('_'); //joins array items 
console.log(arrJoin, typeof arrJoin);
console.log();

let arrPop = arrDemo.pop();
console.log(arrPop); //pop last item
console.log(arrDemo);
console.log();

let arrPush = arrDemo.push(76);
console.log(arrDemo); //push item to array
console.log();

let arrShift = arrDemo.shift(); //removes first item
console.log(arrDemo, arrShift);
console.log();

let arrUnshift = arrDemo.unshift(65); //adds item at begining
console.log(arrDemo, arrUnshift);


