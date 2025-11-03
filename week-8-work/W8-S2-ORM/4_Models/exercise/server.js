// Import required packages
const express = require("express");
const { Sequelize, DataTypes } = require("sequelize");
const bodyParser = require("body-parser");

// Initialize Express application
const app = express();
app.use(bodyParser.json());

const password = "<add your MySQL password here>";
if (password === "<add your MySQL password here>") {
  console.error("Please update MySQL password in server.js");
  process.exit(1);
}

// Setup Sequelize with MySQL database
const sequelize = new Sequelize("posts_db", "root", password, {
  host: "localhost",
  dialect: "mysql",
  port: 3306,
});

// Define Post model
const Post = sequelize.define(
  "Post",
  {
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    postedBy: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    createdOn: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
    },
  },
  {
    timestamps: false,
  }
);

// Sync database
sequelize
  .sync()
  .then(() => console.log("Database & tables created!"))
  .catch((err) => console.error("Database sync error:", err));

// Route to add a new post
app.post("/api/posts", async (req, res) => {
  try {
    const { title, content, postedBy } = req.body;
    const post = await Post.create({ title, content, postedBy });
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ error: "Error adding post" });
  }
});

// Route to get all posts
app.get("/api/posts", async (req, res) => {
  try {
    const posts = await Post.findAll();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: "Error retrieving posts" });
  }
});

// Start the server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
