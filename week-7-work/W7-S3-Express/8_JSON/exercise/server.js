// Import the required modules
const express = require("express");
const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

// Create an instance of an Express application
const app = express();

// Define the port the server will listen on
const PORT = 3002;

// Middleware to parse incoming JSON requests
app.use(express.json());

// Define the path to the JSON file
const dataFilePath = path.join(__dirname, "data.json");

// Function to read data from the JSON file
const readData = () => {
  if (!fs.existsSync(dataFilePath)) {
    return [];
  }
  const data = fs.readFileSync(dataFilePath);
  return JSON.parse(data);
};

// Function to write data to the JSON file
const writeData = (data) => {
  fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
};

// Handle GET request at the root route
app.get("/", (req, res) => {
  res.send("Welcome to the simple Express app!");
});

// Handle GET request to retrieve stored data
app.get("/data", (req, res) => {
  const data = readData();
  res.json(data);
});

// Handle POST request to save new data with a unique ID
app.post("/data", (req, res) => {
  const body = req.body;

  // Basic validation: ensure body is not empty and has required fields
  if (!body || Object.keys(body).length === 0) {
    return res.status(400).json({ message: "Request body cannot be empty" });
  }

  // Optional: Require certain fields (customize this to your needs)
  if (!body.name) {
    return res.status(400).json({ message: "Missing required field: name" });
  }

  const newData = { id: uuidv4(), ...body };
  const currentData = readData();
  currentData.push(newData);
  writeData(currentData);
  res.status(201).json({ message: "Data saved successfully", data: newData });
});

// Handle GET request to retrieve data by ID
app.get("/data/:id", (req, res) => {
  const data = readData();
  const item = data.find((item) => item.id === req.params.id);
  if (!item) {
    return res.status(404).json({ message: "Data not found" });
  }
  res.json(item);
});

// Handle PUT request to update data by ID
app.put("/data/:id", (req, res) => {
  const data = readData();
  const id = req.params.id;
  const body = req.body;

  // Validate: ensure body isn’t empty
  if (!body || Object.keys(body).length === 0) {
    return res.status(400).json({ message: "Request body cannot be empty" });
  }

  const index = data.findIndex((item) => item.id === id);
  if (index === -1) {
    return res.status(404).json({ message: "Data not found" });
  }

  // Prevent changing the ID
  delete body.id;

  // Merge and save
  data[index] = { ...data[index], ...body };
  writeData(data);

  res.json({ message: "Data updated successfully", data: data[index] });
});

// Handle DELETE request to delete data by ID
app.delete("/data/:id", (req, res) => {
  const data = readData();
  const id = req.params.id;
  const filteredData = data.filter((item) => item.id !== id);

  if (filteredData.length === data.length) {
    return res.status(404).json({ message: "Data not found" });
  }

  writeData(filteredData);
  res.json({ message: "Data deleted successfully" });
});

// Handle POST request at the /echo route
app.post("/echo", (req, res) => {
  // Respond with the same data that was received in the request body
  res.json({ received: req.body });
});

// Wildcard route to handle undefined routes
app.all("*", (req, res) => {
  res.status(404).send("Route not found");
});

// Global error handler (optional but helpful)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});