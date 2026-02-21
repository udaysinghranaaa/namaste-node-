// Import another module (xyz.js) – optional, only if file exists
require("./xyz.js");

// Import both functions from calculate/index.js
// This avoids duplicate imports and keeps code clean
const { calculateSum, calculateMultiply } = require("./calculate");

var name = "Namaste NodeJS";

var a = 10;
var b = 20;

// Call functions
calculateSum(a, b);       // Output: Sum: 30
calculateMultiply(a, b);  // Output: Multiply: 200

// Optional debug logs
// console.log(name);
// console.log(a + b);
// console.log(global);
// console.log(this); // Node.js me empty object hota hai
// console.log(x);    // Agar declare nahi kiya to ReferenceError aayega