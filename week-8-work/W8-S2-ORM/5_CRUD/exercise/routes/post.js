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

// Route to get a single post by ID
app.get("/posts/:id", async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);
    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: "Error retrieving post" });
  }
});

// Route to update a post
app.put("/posts/:id", async (req, res) => {
  try {
    // Destructure updated fields from request body
    const { title, content, postedBy } = req.body;

    // Update the post
    const [updatedRows] = await Post.update(
      { title, content, postedBy },
      { where: { id: req.params.id } }
    );

    // If no rows were updated, post not found
    if (updatedRows === 0) {
      return res.status(404).json({ error: "Post not found" });
    }

    // Fetch and return the updated post
    const updatedPost = await Post.findByPk(req.params.id);
    res.json(updatedPost);
  } catch (error) {
    res.status(500).json({ error: "Error updating post" });
  }
});

// Route to delete a post
app.delete("/posts/:id", async (req, res) => {
  try {
    // Delete the post using the destroy method
    const deletedRows = await Post.destroy({
      where: { id: req.params.id },
    });

    // If no rows were deleted, post not found
    if (deletedRows === 0) {
      return res.status(404).json({ error: "Post not found" });
    }

    res.json({ message: "Post successfully deleted" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting post" });
  }
});

// export the router
module.exports = app;