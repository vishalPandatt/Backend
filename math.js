

// module.exports = 222;        // exporting a number

//1st way to export the functions as an object


// const sum = (a, b) => a + b;
// const multiply = (a, b) => a * b;
// const subtract = (a, b) => a - b;

// let obj = {                         // creating an object to hold the functions
//     sum: sum,               
//     multiply: multiply,
//     subtract: subtract
// };

// module.exports = obj;               // exporting the object to the second file



//2nd way to export the functions as an object

// module.exports.sum = (a, b) => a + b;
// module.exports.multiply = (a, b) => a * b;
// exports.subtract = (a, b) => a - b;          // we can export using exports keyword as well


// If we create a folder where have multiple files and we want to export all the files from that folder we use index.js file, so we can export all the files from that folder using index.js file. 


export const sum = (a, b) => a + b;             // exporting individual functions
const multiply = (a, b) => a * b;
const subtract = (a, b) => a - b;

