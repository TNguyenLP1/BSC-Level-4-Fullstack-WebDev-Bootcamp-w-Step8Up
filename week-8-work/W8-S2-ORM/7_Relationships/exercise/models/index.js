// import all models
const Post = require("./post");
const Category = require("./category");
const User = require("./user");

// Define relationships
Post.belongsTo(Category, {
  foreignKey: "categoryId",
  as: "category",
});

Category.hasMany(Post, {
  foreignKey: "categoryId",
  as: "posts",
});

// Example: if each post is created by one user
Post.belongsTo(User, {
  foreignKey: "userId",
  as: "author",
});

User.hasMany(Post, {
  foreignKey: "userId",
  as: "posts",
});

module.exports = {
  Post,
  Category,
  User,
};