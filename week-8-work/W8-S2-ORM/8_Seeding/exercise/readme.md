# Seeding a Database with Sequelize

## Challenge

Seeding is a great way to populate a database with test data. This can be useful when building out front-end screens, testing functionality, and performing load testing by adding large volumes of data.

The existing code in the exercise folder already includes seed data for the `posts` table. However, the `categories` table, which the `posts` reference, does not have any seed data.

### Your Task

Your challenge is to:

1. **Create seed data** for the `categories` table
2. **Modify the seeding script** to insert the category data into the database
3. **Ensure that posts reference valid categories**

## Key Learnings

- How to create and load seed data using Sequelize
- The purpose and benefits of seeding data

## User Story

**As a** developer,  
**I want to** seed the database with test data,  
**So that** I can test my application effectively with realistic data.

## Acceptance Criteria

### 1. Set Up the Project

- Install dependencies (if not already installed):

```bash
  npm install
```

- Start the server to ensure it runs correctly:

```bash
npm run start
```

### 2. Create Seed Data for Categories

- Navigate to the seeders folder (or create one inside db if it doesn’t exist).
- Create a new seeding file, e.g., seed-categories.js.
- Define an array of categories with at least:
  id (Primary Key)
  name (Unique category name)

### 3. Load the Seed Data

- Modify the seeds/index.js file (or create one if missing) to:
- Load both categories and posts seed data
- Ensure that posts reference valid category IDs

- Run the seeding command:

```bash
npm run seed
```

### 4. Verify the Seed Data

- Use Postman or MySQL Workbench to:
  Fetch all categories using:

```bash
GET http://localhost:3001/api/categories
```

Ensure posts are linked to valid categories

Good luck!
