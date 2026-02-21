require("./xyz.js"); // one module into another 

const { calculateSum }= require("./sum"); //destructuring - we dont need to write obj everywere


var name = "Namaste NodeJS";



var a = 10;

var b = 20;

var x = 12;
calculateSum(a,b);

// console.log(name);
// console.log(a+b);

// console.log(global);

// console.log(this); // empty object
console.log(x);