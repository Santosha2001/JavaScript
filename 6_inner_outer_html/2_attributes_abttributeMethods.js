let divId = document.getElementById("id1");

// gives class name
console.log(divId.getAttribute("class")); //container

// true if attribute present else false
console.log(divId.hasAttribute("class")); //true
console.log(divId.hasAttribute("id")); //true
console.log(divId.hasAttribute("container")); //false

//hides content
// console.log(divId.setAttribute("hidden", "true"));

// we can set one or more values to attribute
console.log(divId.setAttribute("class", "container container2"));

//removes attribute
// console.log(divId.removeAttribute("class"));

console.log(divId.getAttribute)