require("dotenv").config(); // Load environment variables
const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
const PORT = 3001;

// Middleware to parse JSON requests
app.use(express.json());

const SECRET_KEY = process.env.SECRET_KEY || "default_secret"; // Use .env secret key or default

// POST /login - Generates a JWT using the request body as payload
app.post("/login", (req, res) => {
  const payload = req.body; // Use whatever JSON is sent in the request
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" }); // Token expires in 1 hour

  res.json({ token });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
