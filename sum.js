// Module Protects Their Variable and function from being leaking  


console.log("Sum Module Executed ");
var x = "Hello World";

function calculateSum (a , b){
    const sum = a+b;

    console.log(sum);

}
module.exports = {
    x , calculateSum,};