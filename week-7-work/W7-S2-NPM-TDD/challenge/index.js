const inquirer = require("inquirer");
const { add, subtract, multiply, divide } = require("./math");
const fs = require("fs");
const path = require("path");

// File to log all calculations
const logFile = path.join(__dirname, "calculations.log");

async function main() {
  try {
    const answers = await inquirer.prompt([
      {
        type: "list",
        name: "operation",
        message: "Which calculation would you like to perform?",
        choices: ["add", "subtract", "multiply", "divide"],
      },
      {
        type: "number",
        name: "num1",
        message: "Enter the first number:",
        validate: (input) => !isNaN(input) || "Please enter a valid number",
      },
      {
        type: "number",
        name: "num2",
        message: "Enter the second number:",
        validate: (input) => !isNaN(input) || "Please enter a valid number",
      },
    ]);

    const { operation, num1, num2 } = answers;

    // Use math.js functions
    let result;
    switch (operation) {
      case "add":
        result = add(num1, num2);
        break;
      case "subtract":
        result = subtract(num1, num2);
        break;
      case "multiply":
        result = multiply(num1, num2);
        break;
      case "divide":
        result = divide(num1, num2);
        break;
      default:
        console.log("Invalid operation selected");
        return;
    }

    console.log(`Result of ${operation}(${num1}, ${num2}) = ${result}`);

    // Log calculation with date and time
    const timestamp = new Date().toLocaleString(); // e.g., "27/10/2025, 21:15:30"
    const logEntry = `[${timestamp}] ${operation}(${num1}, ${num2}) = ${result}\n`;

    fs.appendFile(logFile, logEntry, (err) => {
      if (err) console.error("Error logging calculation:", err);
      else console.log("Calculation logged successfully with timestamp.");
    });
  } catch (err) {
    console.error("Error:", err);
  }
}

main();
