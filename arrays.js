//NOTE: js arrays can have a mix of data types
//NOTE: arrays are objects in JavaScript
//NOTE: JS array copy operations are shallow copy operations
//NOTE: Some common methods that create shallow copies in JavaScript include:
// Array.prototype.slice()
// Array.prototype.concat()
// Object.assign()
// Spread syntax (...)

//slice and splice
myArr = [0, 1, 2, 3, 4, 5]

console.log("A ", myArr)

//slice
arr1 = myArr.slice(2, 4)
console.log(arr1)
console.log("B ", myArr)

//splice
arr2 = myArr.splice(2, 4)
console.log(arr2)
console.log("C ", myArr)


