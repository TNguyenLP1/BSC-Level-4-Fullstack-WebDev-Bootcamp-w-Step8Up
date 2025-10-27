/* traditional way to merge arrays */

// Using apply() to pass array elements as arguments
var numbers = [1, 2, 3];
var max = Math.max.apply(null, numbers);
console.log(max); // 3

// Using concat() to combine arrays
var arr1 = [1, 2];
var arr2 = [3, 4];
var combined = arr1.concat(arr2);
console.log(combined); // [1, 2, 3, 4]

/* modern ES6+ way to merge arrays */

// Using spread operator for function arguments
const numbers2 = [1, 2, 3];
const max2 = Math.max(...numbers2);
console.log(max2); // 3

// Using spread operator to combine arrays
const arr3 = [1, 2];
const arr4 = [3, 4];
const combined2 = [...arr3, ...arr4];
console.log(combined2); // [1, 2, 3, 4]

/* spreading objects */
const style = {
  color: "red",
  fontSize: "16px",
  fontWeight: "bold",
};

const newStyle = {
  ...style,
  fontSize: "18px",
  width: "100%",
};

console.log(newStyle);