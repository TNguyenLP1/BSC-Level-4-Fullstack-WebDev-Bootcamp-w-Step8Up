// Import required packages
const express = require("express");
const sequelize = require("./config/connection");
const routes = require("./routes");

// Initialize Express app
const app = express();

// Middleware for parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use routes
app.use("/api", routes);

// Determine port and rebuild flag
const PORT = process.env.PORT || 3001;
const rebuild = process.argv.includes("--rebuild");

// Sync database and start server
sequelize.sync({ force: rebuild }).then(() => {
  console.log(`Database synced (rebuild: ${rebuild})`);
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
});