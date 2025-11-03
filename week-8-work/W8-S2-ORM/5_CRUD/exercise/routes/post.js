// create a new router
const app = require("express").Router();

// import the models
const { Post } = require("../models/index");

// Route to add a new post
app.post("/posts", async (req, res) => {
  try {
    const { title, content, postedBy } = req.body;
    const post = await Post.create({ title, content, postedBy });
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ error: "Error adding post" });
  }
});

// Route to get all posts
app.get("/posts", async (req, res) => {
  try {
    const posts = await Post.findAll();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: "Error retrieving posts" });
  }
});

app.get("/posts/:id", async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: "Error retrieving post" });
  }
});

// Route to update a post
app.put("/posts/:id", async (req, res) => {
  try {
    //TODO: destructuring the title, content, and postedBy from the request body
    //TODO: update the post using the update method on the Post model
    //TODO: return the updated post
  } catch (error) {
    res.status(500).json({ error: "Error updating post" });
  }
});

// Route to delete a post
app.delete("/posts/:id", async (req, res) => {
  try {
    //TODO: add delete logic here using the destroy method on the Post model
    //TODO:return the updated post
  } catch (error) {
    res.status(500).json({ error: "Error deleting post" });
  }
});

// export the router
module.exports = app;
