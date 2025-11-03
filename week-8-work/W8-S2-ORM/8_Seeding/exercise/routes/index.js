const router = require("express").Router();

const postRoutes = require("./post");
const categoryRoutes = require("./category");

// create a default route for /api
router.get("/api", (req, res) => {
  res.json({ message: "Welcome to the API" });
});

router.use("/api/categories", categoryRoutes);
router.use("/api/posts", postRoutes);

module.exports = router;
