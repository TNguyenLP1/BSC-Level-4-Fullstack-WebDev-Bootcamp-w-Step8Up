const router = require("express").Router();
const postRoutes = require("./post");

// Default route for /api
router.get("/", (req, res) => {
  res.json({ message: "Welcome to the API" });
});

// Mount post.js routes directly (no extra /api)
router.use("/", postRoutes);

module.exports = router;