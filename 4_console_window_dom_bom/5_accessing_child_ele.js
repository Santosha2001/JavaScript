console.log(document.body.firstChild);
console.log(document.body.lastChild);
console.log(document.body.childNodes);

//child nodes are not array but we can convert it to an aray
let arr = Array.from(document.body.childNodes);
console.log(arr, typeof arr);