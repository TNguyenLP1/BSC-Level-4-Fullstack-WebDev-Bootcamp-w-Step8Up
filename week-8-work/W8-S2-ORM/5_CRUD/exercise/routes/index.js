const router = require("express").Router();

const postRoutes = require("./post");

// create a default route for /api
router.get("/api", (req, res) => {
  res.json({ message: "Welcome to the API" });
});

router.use("/api/", postRoutes);

module.exports = router;
