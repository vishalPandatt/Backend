
// we can require another file when module system is commonjs--

const { Responses } = require("openai/resources.js")

// 1st way to import the file- 

// const math = require('./math');

// console.log(math.add(5, 2));
// console.log(math.sub(5, 2));

// 2nd way to import the file-

// const { add, sub } = require('./math');

// console.log(add(5, 2));
// console.log(sub(5, 2));


// If the file is using ES6 module system, you can import functions like this:

// 1st way to import the file-

// import { add, sub } from './math.js';
// console.log(add(5, 2));

// 2nd way to import the file-

// import add from './math.js';
// console.log(add(5, 2));


// Status Code--
// informational Responses (100-199)
// SUCCESSFUL Responses (200-299)
// Redirection Responses (300-399)
// Client Responses (400-499)
// Server Responses (500-599)
