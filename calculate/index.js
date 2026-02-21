// Centralized export file
// Import sum and multiply functions from their respective files
const { calculateSum } = require("./sum");
const { calculateMultiply } = require("./multiply");

// Export both together
module.exports = { calculateSum, calculateMultiply };