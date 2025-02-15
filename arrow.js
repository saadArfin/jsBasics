const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); // output -> {} because this is a global object in nodejs

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);// output -> undefined
//     console.log(this); // output -> we will get <ref *1> Object [global] {
// //         global: [Circular *1],
// //         clearImmediate: [Function: clearImmediate],
// //         setImmediate: [Function: setImmediate] {
// //           [Symbol(nodejs.util.promisify.custom)]: [Getter]
// //         },
// //         clearInterval: [Function: clearInterval],
// //         clearTimeout: [Function: clearTimeout],
// //         setInterval: [Function: setInterval],
// //         setTimeout: [Function: setTimeout] {
// //           [Symbol(nodejs.util.promisify.custom)]: [Getter]
// //         },
// //         queueMicrotask: [Function: queueMicrotask],
// //         structuredClone: [Function: structuredClone],
// //         atob: [Getter/Setter],
// //         },
// //         queueMicrotask: [Function: queueMicrotask],
// //         structuredClone: [Function: structuredClone],
// //         atob: [Getter/Setter],
// //         queueMicrotask: [Function: queueMicrotask],
// //         structuredClone: [Function: structuredClone],
// //         atob: [Getter/Setter],
// //         btoa: [Getter/Setter],
// //         performance: [Getter/Setter],
// //         structuredClone: [Function: structuredClone],
// //         atob: [Getter/Setter],
// //         btoa: [Getter/Setter],
// //         performance: [Getter/Setter],
// //         fetch: [Function: fetch],
// //         atob: [Getter/Setter],
// //         btoa: [Getter/Setter],
// //         performance: [Getter/Setter],
// //         fetch: [Function: fetch],
// //         crypto: [Getter]
// //         btoa: [Getter/Setter],
// //         performance: [Getter/Setter],
// //         fetch: [Function: fetch],
// //         crypto: [Getter]
// //         fetch: [Function: fetch],
// //         crypto: [Getter]
// //         crypto: [Getter]
// //       } as output 
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);// output -> undefined
    
//     console.log(this);// output -> we will get <ref *1> Object [global] {
        // //         global: [Circular *1],
        // //         clearImmediate: [Function: clearImmediate],
        // //         setImmediate: [Function: setImmediate] {
        // //           [Symbol(nodejs.util.promisify.custom)]: [Getter]
        // //         },
        // //         clearInterval: [Function: clearInterval],
        // //         clearTimeout: [Function: clearTimeout],
        // //         setInterval: [Function: setInterval],
        // //         setTimeout: [Function: setTimeout] {
        // //           [Symbol(nodejs.util.promisify.custom)]: [Getter]
        // //         },
        // //         queueMicrotask: [Function: queueMicrotask],
        // //         structuredClone: [Function: structuredClone],
        // //         atob: [Getter/Setter],
        // //         },
        // //         queueMicrotask: [Function: queueMicrotask],
        // //         structuredClone: [Function: structuredClone],
        // //         atob: [Getter/Setter],
        // //         queueMicrotask: [Function: queueMicrotask],
        // //         structuredClone: [Function: structuredClone],
        // //         atob: [Getter/Setter],
        // //         btoa: [Getter/Setter],
        // //         performance: [Getter/Setter],
        // //         structuredClone: [Function: structuredClone],
        // //         atob: [Getter/Setter],
        // //         btoa: [Getter/Setter],
        // //         performance: [Getter/Setter],
        // //         fetch: [Function: fetch],
        // //         atob: [Getter/Setter],
        // //         btoa: [Getter/Setter],
        // //         performance: [Getter/Setter],
        // //         fetch: [Function: fetch],
        // //         crypto: [Getter]
        // //         btoa: [Getter/Setter],
        // //         performance: [Getter/Setter],
        // //         fetch: [Function: fetch],
        // //         crypto: [Getter]
        // //         fetch: [Function: fetch],
        // //         crypto: [Getter]
        // //         crypto: [Getter]
        // //       } as output
//}

// const chai =  () => {
//     let username = "hitesh"
//     console.log(this.username);// output -> undefined
    
//     console.log(this);// output -> {}
// }


// chai()

// const addTwo = (num1, num2) => { //if curly braces are used then return keyword is mandatory
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

    

// const addTwo = (num1, num2) => ( num1 + num2 ) //if we use parenthesis then return keyword is not mandatory 

// const addTwo = (num1, num2) => ({username: "hitesh"})


// console.log(addTwo(3, 4))
