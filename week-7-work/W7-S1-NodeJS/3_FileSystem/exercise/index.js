// index.js
const fs = require("fs");
const path = require("path");

const message = process.argv[2];

if (!message) {
  console.log("Please provide a message as a command-line argument.");
  process.exit(1);
}

const messagesFile = path.join(__dirname, "messages.json");
const logFile = path.join(__dirname, "log.txt");

// Read messages.json
fs.readFile(messagesFile, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading messages.json:", err);
    return;
  }

  let messages = [];
  try {
    messages = JSON.parse(data);
  } catch (parseErr) {
    console.error("Error parsing JSON:", parseErr);
  }

  // Print full messages before appending the new one
  console.log("Messages before adding new entry:");
  console.log(JSON.stringify(messages, null, 2));

  // Append new message
  messages.push(message);
  const updatedJSON = JSON.stringify(messages, null, 2);

  // Write updated messages back to messages.json
  fs.writeFile(messagesFile, updatedJSON, "utf8", (err) => {
    if (err) {
      console.error("Error writing messages.json:", err);
      return;
    }

    console.log("Message added successfully!");

    // Append log with timestamp
    const timestamp = new Date().toLocaleString();
    const logEntry = `[${timestamp}] Added message: "${message}". Total messages: ${messages.length}\n`;

    fs.appendFile(logFile, logEntry, "utf8", (err) => {
      if (err) {
        console.error("Error writing to log file:", err);
        return;
      }

      console.log("Log updated:");
      console.log(logEntry);
    });
  });
});