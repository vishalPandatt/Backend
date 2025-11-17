// let n= 5;

// for(i=0; i < n; i++) {
//     console.log("Iteration number: " + i);
// };

// console.log(Process);


// const math = require('./math');             // importing the object from the math.js file
// console.log(math);

// console.log("Sum: " + math.sum(5, 3));          // using the functions from the imported object
// console.log("Multiply: " + math.multiply(5, 3));
// console.log("Subtract: " + math.subtract(5, 3));


// we can also import specific functions from the object like this

// import { sum, multiply, subtract } from './math.js';      // importing specific functions from the math.js file

// console.log("Sum: " + sum(5, 3));          // using the imported functions
// console.log("Multiply: " + multiply(5, 3));
// console.log("Subtract: " + subtract(5, 3));


import {generate,  count} from 'random-words';          // importing the random-words package

console.log(generate(5));               // generating 5 random words
console.log(count);                    // printing the count of words generated