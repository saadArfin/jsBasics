// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); // semi-colon is necessary here because if we don't put semi-colon then it wont stop the execution of the first function and will throw an error

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh');

//NOTE: Reasons to use IIFE -> 1. To avoid polluting the global scope 2. To avoid naming conflicts 3. To encapsulate the code 4. To avoid hoisting 5. To avoid global variables 6. to immediately run the function