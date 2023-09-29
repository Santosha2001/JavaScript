//Q-1
let age = prompt("Enter your age ", 18);
age = Number.parseInt(age);

if (age < 0) {
    alert("age is in-valid");
}
else if (age < 18) {
    alert("You are below 18, can't drive");
}
else {
    alert("You can drive");
}