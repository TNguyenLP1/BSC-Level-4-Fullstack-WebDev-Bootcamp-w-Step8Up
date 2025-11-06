require("dotenv").config();
const { Sequelize } = require("sequelize");

// Optional check: warn but don't stop server
if (!process.env.DB_PASSWORD || process.env.DB_PASSWORD === "ChangeMe!") {
  console.warn("Please update your .env file with a valid database password.");
}

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(
      process.env.DB_DATABASE,
      process.env.DB_USERNAME,
      process.env.DB_PASSWORD,
      {
        host: process.env.DB_HOST || "localhost",
        dialect: process.env.DB_DIALECT || "mysql",
        port: process.env.DB_PORT || 3306,
        logging: false, // optional: hides SQL logs in console
      }
    );

module.exports = sequelize;