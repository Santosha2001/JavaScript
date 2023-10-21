//set timeout
let a = setTimeout(() => {
    alert("set time out function");
    document.write("using set timeout");
}, 2000);

//clears timeout
let b = prompt("do you want exicute again");
if ("no" == b) {
    clearTimeout(a);
}

console.log(a);


// let sum = (a, s, d) => {
//     console.log("sum is--> ", (a + s + d));
// }

// setTimeout(sum, 1000, 1, 2, 3);