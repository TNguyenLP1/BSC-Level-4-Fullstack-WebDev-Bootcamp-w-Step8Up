// ----------------------------------------------
// NodeJS & Debugging Challenge
// Demonstrating recursion using the Fibonacci sequence
// ----------------------------------------------

// Recursive Fibonacci function
function fibonacci(n) {
  // Base case: if n is 0 or 1, return n directly
  if (n <= 1) {
    return n;
  }

  // Recursive case: sum of the previous two Fibonacci numbers
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Choose how many Fibonacci numbers to generate
const n = 10;

console.log(`Printing first ${n} Fibonacci numbers:`);

// Loop through and print each Fibonacci number
for (let i = 0; i < n; i++) {
  // You can set a breakpoint here to step through each iteration
  const result = fibonacci(i); // Step into this call during debugging
  console.log(`fibonacci(${i}) = ${result}`);
}
// End of index.js