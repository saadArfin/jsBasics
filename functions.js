function isLoggedIn(username){
    return `${username} is logged in`;
}

const x = isLoggedIn();
console.log(x); // output -->  undefined is logged in


function calculatCartPrice(value1, value2, ...num){
    return num
}

console.log(calculatCartPrice(1, 2, 3, 4, 5)); // output --> [ 3, 4, 5 ]
//NOTE: ... is called the rest operator and it is used to collect all the remaining arguments into an array
//NOTE: ... is also called the spread operator and it is used to spread the elements of an array into individual elements
//IMP!!! NOTE: Global scope in node environment and browser environment is different!!! 
