//Q1-channge color of first element of nav or nav-ul
let change_color = document.getElementById("nav1");
change_color.firstElementChild.firstElementChild.style.background = "red";
console.log("color changed--> ", change_color);


// Q2-change color to first and last child
let child = document.getElementById("div1");
child.firstElementChild.style.background = "green";
child.lastElementChild.style.background = "green";


// Q3-changing li color
Array.from(document.getElementsByTagName("li")).forEach((element) => {
    element.style.color = "purple";
})

//console.log() gives document tree
//console.dir() gives document elements as object
console.log(document.body.firstChild.nodeName) //text
console.log(document.body.firstElementChild.nodeName) //nav
