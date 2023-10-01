const changeBg = () => {
    document.body.firstElementChild.style.background = "blue";
}

changeBg();
console.log(document.body);
let a = document.body;
console.log("fist child is--> ", a.firstChild);
console.log("first child element is--> ", a.firstElementChild);