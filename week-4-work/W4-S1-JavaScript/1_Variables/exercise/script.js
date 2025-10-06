// Variables
var firstName = "John";
var surName = "Smith"; // Keep just one declaration

var age = 25;
var retirementAge = 67;

// Log string concatenation
console.log("you" + " " + "can" + " add" + " " + "strings" + " " + "together");

// Template literal example
console.log(`or use template literals to output details for Mr. ${surName}`);

// ✅ TODO: log out the full name "John Smith"
console.log(firstName + " " + surName);

// ✅ TODO: log out "John Smith and I am 25 years old"
console.log(`${firstName} ${surName} and I am ${age} years old`);

// ✅ TODO: Create a variable to store the number of years until retirement
var yearsUntilRetirement = retirementAge - age;

// ✅ TODO: log out "I have 42 years until retirement"
console.log(`I have ${yearsUntilRetirement} years until retirement`);