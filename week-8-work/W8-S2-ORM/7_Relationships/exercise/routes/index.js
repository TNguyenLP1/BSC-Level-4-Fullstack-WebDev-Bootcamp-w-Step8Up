const router = require("express").Router();

const postRoutes = require("./post");
const categoryRoutes = require("./category");
const userRoutes = require("./user");

// Default route for /api
router.get("/api", (req, res) => {
  res.json({ message: "Welcome to the API" });
});

// Use routes
router.use("/api/categories", categoryRoutes);
router.use("/api/posts", postRoutes);
router.use("/api/users", userRoutes);

module.exports = router;