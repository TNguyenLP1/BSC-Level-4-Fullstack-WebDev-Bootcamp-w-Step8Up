const sequelize = require("../config/connection");
const { Post, Category } = require("../models");

const categoryData = require("./categories.json");
const postData = require("./posts.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  // Seed categories first
  const categories = await Category.bulkCreate(categoryData, {
    individualHooks: true,
    returning: true,
  });

  // Seed posts with valid category IDs
  const postsWithCategory = postData.map((post, index) => ({
    ...post,
    categoryId: categories[index % categories.length].id, // matches association
  }));

  await Post.bulkCreate(postsWithCategory);

  process.exit(0);
};

seedDatabase();