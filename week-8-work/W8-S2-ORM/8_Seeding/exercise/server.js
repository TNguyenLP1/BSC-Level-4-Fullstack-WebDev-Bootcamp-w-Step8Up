// Import required packages
const express = require("express");
const bodyParser = require("body-parser");

const sequelize = require("./config/connection");
const routes = require("./routes");

// Initialize Express application
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Mount routes under /api
app.use("/api", routes);

// Set the port
const PORT = process.env.PORT || 3001;

// Check for --rebuild flag
const rebuild = process.argv[2] === "--rebuild";

// Sync database
sequelize.sync({ force: rebuild }).then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});