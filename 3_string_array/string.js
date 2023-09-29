//string methods
let str = "Java Script";
let str1 = "Santosh C"
let str2 = "    Java   ";
let str3 = "Hello,"
let str4 = "JS is lighweight language";

console.log(str.length);
console.log(str.toLowerCase());
console.log(str.toUpperCase());

console.log();
console.log(str.slice(2)); //va Script
console.log(str.slice(2, 8)); //va Scr
console.log(str.slice("Java ".length)); //Script

console.log();
console.log(str1.replace("C", "Rathod")); //Santosh Rathod

console.log();
console.log(str2.trim());
console.log(str3.concat(" World!"));

console.log();
console.log(str4.includes("is")); //true
console.log(str4.startsWith("is")); //false
console.log(str4.endsWith("language")); //true
console.log(str4.endsWith("e")); //true

