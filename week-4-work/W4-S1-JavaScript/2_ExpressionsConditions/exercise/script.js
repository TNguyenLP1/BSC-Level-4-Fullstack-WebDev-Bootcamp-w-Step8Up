// JavaScript Expressions and Conditions Exercise

// 1. Variable Declaration and Assignment
let num1 = 10; // A number
let num2 = "10"; // A string with a numeric value
let isTrue = true; // A boolean

// 2. Using Comparison Operators

// Comparison using '>'
let isGreater = num1 > 5; // Checks if num1 is greater than 5
console.log("Is num1 greater than 5?", isGreater); // true

// TODO: Comparison using '<='
let isLesser = num1 <= 10;
console.log("Is num1 less than or equal to 10?", isLesser); 

// 3. Strict vs. Value Comparison
// TODO: Value comparison using '=='
let compare = num1 == num2;
console.log("Is num1 equal num2?", compare)

// TODO: Strict comparison using '==='
// 4. Conditional Statements
let realcompare = num1 === num2;
console.log("Is num1 really equal num2?", realcompare)

// Example of an if/else condition using a comparison
if (num1 === 10) {
  console.log("num1 is exactly equal to 10 (strict comparison)."); // This block will run
} else {
  console.log("num1 is not exactly equal to 10.");
}

// Another conditional statement to check if num1 is greater than 15
let isGreaterer = num1 > 15;
console.log("Is num1 greater than 15?", isGreaterer); // true



// 5. TODO - Conditional Statements with Logical Operators
if (num2 === "10" && num1 === "10") {
  console.log("num1 is less than 15 and num2 is exactly equal to '10'.");
}

if (num1 < 15 && (num2 === "10" || num1 === 10)) {
  console.log("num1 is less than 15 and num2 is exactly equal to '10'.");
}

// TODO: what's the difference between the && and || operators?
 // Condtion 1 && Condition 2 - This block runs only if BOTH condition1 AND condition2 are true.
  // (AND)

/// TODO: Add a conditional statement to check if num1 is less than 15 and num2 is exactly equal to '10'.
  // Conidtion 1 || Condition 2 - This block runs if EITHER condition1 OR condition2 is true.
    // (OR)

