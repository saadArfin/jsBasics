const gameName = new String("saadarfin");

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));

//NOTE: methods like touppercase wont change the original string but will return a new string with the changes
//because string is a primitive data type and is immutable

//NOTE: strings are immutable in JavaScript

//NOTE: AN IMPORTANT FORMULA -> Math.floor(Math.random() * (max - min + 1)) + min

//NOTE: Date is an object in JavaScript
