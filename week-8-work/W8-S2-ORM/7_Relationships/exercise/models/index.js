// import all models
const Post = require("./post");
const Category = require("./category");

Post.belongsTo(Category, {
  foreignKey: "categoryId",
  as: "category",
});

Category.hasMany(Post, {
  foreignKey: "categoryId",
  as: "posts",
});

module.exports = {
  Post,
  Category,
};
