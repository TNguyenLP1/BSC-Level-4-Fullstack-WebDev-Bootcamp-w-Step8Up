# Introducing Sequelize ORM

## Challenge

In this exercise, you'll set up and use Sequelize ORM within an Express.js server. You will create a database table called `posts`, insert records using Postman, and retrieve data using Sequelize and MySQL Workbench.

## Key Learnings

- Understanding the role of Sequelize ORM in database interactions
- How to use a `.env` file to store sensitive credentials
- Installing and configuring Sequelize
- Defining and interacting with basic models

## User Story

**As a** backend developer,  
**I want to** set up Sequelize ORM with an Express server,  
**So that** I can interact with a MySQL database in a structured way.

## Acceptance Criteria

### 1. Database Setup

- Log in to MySQL:
  ```bash
  mysql -u root -p
  ```
- Run the schema file to create the database:

```bash
source db/schema.sql;
```

- Exit MySQL:

```bash
quit;
```

### 2. Project Setup

- Copy the environment variables file

```bash
cp .env.example .env
```

- Update the .env file with the correct database password
- Open server.js and update the MySQL password to match your own root password
- Install dependencies:

```bash
npm install
```

- Start the server:

```bash
npm run start
```

### 3. Working with the API

Use Postman or another API client to test the following routes

- Use Postman or another API client to test the following routes

- GET all posts

```bash
GET http://localhost:3001/api/posts
```

- POST a new post with the following JSON object

```json
{
  "title": "My First Post",
  "content": "This is an example blog post.",
  "postedBy": "John Smith"
}
```

### 4. Verifying Data in MySQL

- Install Sequelize CLI or MySQL Workbench
- Open the blog_db database
- Run a query to retrieve rows from the posts table:

```sql
SELECT * FROM posts;
```
