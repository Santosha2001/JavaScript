let a = setInterval(() => {
    // alert("set-interval");
    console.log("set-interval");
}, 2000);

let b = prompt("do you want to continue");
if ("no" == b) {
    clearInterval(a);
}
console.log(a);