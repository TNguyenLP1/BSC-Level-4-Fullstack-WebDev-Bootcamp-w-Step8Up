// Defind a and b

let a = 4
let b = 6

// Multiply function
// TODO: Add the code here
function multiplyNumbers(a, b = 1) {
  return a * b;
}
// Need to put b = 1 for default value to = 1
let sum = multiplyNumbers(a,b);
console.log("The result is: " + sum);


// Divide function
function divideNumbers(a, b = 1) {
  return a / b;
}
let dividend = divideNumbers(a,b);
console.log("The result is: " + dividend);


// Add function
function addNumbers(a, b = 1) {
  return a + b;
}
let total = addNumbers(a,b);
console.log("The result is: " + total);


// Subtract function
function subtractNumbers(a, b = 1) {
  return a - b;
}
let remain = subtractNumbers(a,b);
console.log("The result is: " + remain);


// ---------------------------------

function calculate(a, b, c) {
    if (c === "add") {
        return a + b;
    }
    if (c === "subtract") {
        return a - b;
    }
    if (c === "multiply") {
        return a * b;
    }
    if (c === "divide") {
        return a / b;
    }
    return "Invalid operation";
}

console.log("Addition: " + calculate(a, b, "add"));
console.log("Subtraction: " + calculate(a, b, "subtract"));
console.log("Multiplication: " + calculate(a, b, "multiply"));
console.log("Division: " + calculate(a, b, "divide"));