//concept of hoisting

//console.log(addone(5)) //no error because of hoisting, reason is that hoisting only works for function declaration not for function expression

function addone(num){
    return num + 1
}

//addTwo(5) //error because of hoisting, reason is that hoisting only works for function declaration not for function expression
const addTwo = function(num){
    return num + 2
}

console.log(this); //output will be -> {} because this is a global object in nodejs
//NOTE: In browser this will be window object

