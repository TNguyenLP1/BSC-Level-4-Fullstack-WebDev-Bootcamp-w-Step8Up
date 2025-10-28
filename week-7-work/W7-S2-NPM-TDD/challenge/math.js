// Add
function add(a, b) {
  return a + b;
}

// Subtract
function subtract(a, b) {
  return a - b;
}

// Multiply
function multiply(a, b) {
  return a * b;
}

// Divide
function divide(a, b) {
  if (b === 0) {
    console.log("Cannot divide by zero!");
    return null;
  }
  return a / b;
}

// Export so function is usable for JS unlike python
module.exports = { add, subtract, multiply, divide };