// Function expression
var sum = function (a, b) {
  return a + b;
};

// Function declaration
function sum2(a, b) {
  return a + b;
}

// Classic array + map
var nums = [1, 2, 3, 4];
var squares = nums.map(function (n) {
  return n * n;
});
console.log("Traditional:", squares); // [1, 4, 9, 16]

// Modern ES6 version
const sumArrow = (a, b) => a + b;
const nums2 = [1, 2, 3, 4];
const squares2 = nums2.map((n) => n * n);
console.log("Arrow:", squares2); // [1, 4, 9, 16]