//adding event llistner
let id = document.getElementById("event");

id.addEventListener('click', function (e) {
    alert("Hello World!");
})

id.addEventListener('click', function (e) {
    alert("Hello Globe!");

    //target will give the on which element is targeted
    console.log(e.target);
})


let input = prompt("Enter your number");
input = Number.parseInt(input);
//to remove event listner both the functions must have to refer to the same reference 
//or else it exicute both.
let a = (e) => {
    alert("Hi Js");
}

id.addEventListener('click', a);

let b = (e) => {
    alert("Hello Js");
}
id.addEventListener('click', b);

if (input = 2) {
    id.removeEventListener('click', a);
    console.log("removed a")
}
