const router = require("express").Router();

const postRoutes = require("./post");
const categoryRoutes = require("./category");

// Default route for /api
router.get("/", (req, res) => {
  res.json({ message: "Welcome to the API" });
});

// Mount routes
router.use("/categories", categoryRoutes);
router.use("/posts", postRoutes);

module.exports = router;
