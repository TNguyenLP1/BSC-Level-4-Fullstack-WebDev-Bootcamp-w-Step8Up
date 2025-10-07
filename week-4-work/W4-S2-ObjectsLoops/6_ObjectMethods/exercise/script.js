// 1. Object.keys() - TODO: WHat does this method do? What is the output?
const person = {
  name: "Alice",
  age: 30,
  city: "New York",
};
console.log("Keys:", Object.keys(person));

// What it does: This method returns an array of a given object's property names (keys).
// Output: For the person object, it returns an array of the keys (properties).
// Output: Keys: ["name", "age", "city"]



// 2. Object.values() - TODO: WHat does this method do? What is the output?
console.log("Values:", Object.values(person));

// What it does: This method returns an array of a given object's property values.
// Output: For the person object, it returns an array of the values.
// Output: Values: ["Alice", 30, "New York"]



// 3. Array.push() - TODO: WHat does this method do? What is the output?
let fruits = ["apple", "banana"];
fruits.push("orange");
console.log("After push:", fruits); // ["apple", "banana", "orange"]

// What it does: This method adds one or more elements to the end of an array and returns the 
// new length of the array.
// Output: After pushing "orange" to the fruits array:
// Output: After push: ["apple", "banana", "orange"]



// 4. Array.pop() - TODO: WHat does this method do? What is the output?
let poppedFruit = fruits.pop();
console.log("After pop:", fruits); // ["apple", "banana"]
console.log("Popped fruit:", poppedFruit); // "orange"

// What it does: This method removes the last element from an array and returns that element.
// Output: After popping "orange" from fruits:
// Output: After pop: ["apple", "banana"]
// Output: Popped fruit: "orange"



// 5. Array.shift() - TODO: WHat does this method do? What is the output?
let shiftedFruit = fruits.shift();
console.log("After shift:", fruits); // ["banana"]
console.log("Shifted fruit:", shiftedFruit); // "apple"

// What it does: This method removes the first element from an array and returns that element.// new length of the array.
// Output: After shifting "apple" from fruits:
// Output: After shift: ["banana"]
// Output: Shifted fruit: "apple"



// 6. Array.concat() - TODO: WHat does this method do? What is the output?
let vegetables = ["carrot", "potato"];
let food = fruits.concat(vegetables);
console.log("After concat:", food); // ["mango", "banana", "carrot", "potato"]

// What it does: This method merges two or more arrays and returns a new array without modifying 
// the original arrays.// new length of the array.
// Output: After concatenating fruits with vegetables, the result is:
// Output: After concat: ["banana", "carrot", "potato"]



// 7. Array.indexOf() - TODO: WHat does this method do? What is the output?
let index = food.indexOf("banana");
console.log("Index of banana:", index); // 1

// What it does: This method returns the index of the first occurrence of a specified 
// element in the array, or -1 if it's not found.
// Output: For the food array, finding the index of "banana":
// Output: Index of banana: 0



// 8. Array.includes() - TODO: WHat does this method do? What is the output?
let hasMango = food.includes("mango");
console.log("Array contains mango:", hasMango); // true

// What it does: This method checks if a specified element exists in the array, returning true if found, 
// otherwise false.
// Output: Checking if "mango" exists in the food array:
// Output: Array contains mango: false



// 9. Array.filter() - Creates a new array with all elements that pass a test
let longFoods = food.filter((item) => item.length > 5);
console.log("Foods with more than 5 letters:", longFoods); // ["banana", "carrot", "potato"]

// What it does: This method creates a new array with all elements that pass the condition 
// provided in the callback function.
// Output: Filtering out foods with more than 5 characters:
// Output: Foods with more than 5 letters: ["banana", "carrot", "potato"]


// CHALLENGE //

// Imagine you're building a simple web application where users enter their names and messages, and you need to:
// Clean up any unnecessary spaces.
// Check if a specific keyword (like "urgent") is included in a message.
// Format the name by making the first letter of each word uppercase (Title Case format).
// Replace certain words to make the message sound more polite or formal (e.g., replacing "bad" with "unfortunate").

// User input for name and message
const userName = "   jane doe ";
const userMessage = "This is a bad idea! Urgent message, please review.  ";

// 1. Trim unnecessary spaces from the name and message
const cleanedName = userName.trim();
const cleanedMessage = userMessage.trim();

// 2. Check if the message contains the word "urgent" (case-insensitive)
const containsUrgent = cleanedMessage.toLowerCase().includes("urgent");

// 3. Format the name into Title Case (first letter of each word capitalized)
const formattedName = cleanedName
  .split(" ")
  .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
  .join(" ");

// 4. Replace the word "bad" with "unfortunate" in the message
const politeMessage = cleanedMessage.replace("bad", "unfortunate");

// Output the results
console.log("Formatted Name: " + formattedName); // "Jane Doe"
console.log("Contains 'urgent': " + containsUrgent); // true
console.log("Polite Message: " + politeMessage); // "This is an unfortunate idea! Urgent message, please review."