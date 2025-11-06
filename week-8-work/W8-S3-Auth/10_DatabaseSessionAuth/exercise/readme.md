# Full Stack Application with Node, Express, Sequelize, and Authentication

## Challenge

In this challenge, you have a full stack application built with **Node.js**, **Express**, **Sequelize**, and **JWT authentication**. The code is structured into logical folders using modules.

Your challenge is to:

1. **Get the application running** following the installation steps.
2. **Test the application** to ensure it works as expected.
3. **Answer the following questions:**

   - What is happening in `models/index.js`?
   - In `models/user.js`, there are hooks at the bottom of the model definition. What do these do?
   - Where are all the routes for the API defined?
   - If you wanted to create a new route called `/api/students`, which file(s) would you need to update?
   - If you had additional data besides user data that you'd like to store in the JWT, how could you do that? Which file would you need to update?

## Key Learnings

- How a full stack application using **Node.js, Express, Sequelize, and JWT authentication** is structured.
- The complete **JWT authentication lifecycle**, including signing and route protection.
- How Sequelize models, hooks, and associations work.
- How to modify and extend a full stack application by adding new routes and modifying authentication.

## User Story

_As a developer, I want to understand how a full stack application is structured, how authentication is handled, and how I can extend the application by adding new routes and modifying JWT payloads._

## Acceptance Criteria

1. The application should run successfully after following the installation steps.
2. You should be able to test authentication and protected routes.
3. You should be able to explain the structure and purpose of key files such as `models/index.js`, `models/user.js`, and the route definitions.
4. You should be able to describe how to:
   - Add a new API route (`/api/students`).
   - Modify the JWT payload to include additional data.

## Getting Started

### Installation Steps

1. **Copy the `.env.example` file** and rename it to `.env`.
2. **Open MySQL in the terminal:**

```bash
mysql -u root -p
```

3. **Run the following command to set up the database:**

```bash
source db/schema.sql;
```

4. **Exit MySQL**

```bash
quit;
```

5. **Update the .env file and set DB_PASSWORD to your MySQL password.**
6. **Install dependencies**

```bash
npm install
```

7. **Seed the database with test data:**

```bash
npm run seed
```

8. **Run the application**

```bash
npm start
```

9. **Open the application in your browser:**

```browser
http://localhost:3001
```

## Resources

- [Express Documentation](https://expressjs.com/)
- [Sequelize Documentation](https://sequelize.org/)
- [jsonwebtoken (JWT) Package](https://www.npmjs.com/package/jsonwebtoken)

## Answer

1. **What Happens in models/index.js**

- The `models/index.js` file initializes Sequelize, establishes a connection to the database, imports all Sequelize models (such as User, Post, and Category), and defines relationships between them.
In other words, it acts as the central point for setting up and managing all data models in the application.

- If referring to `routes/index.js`, that file serves as the main entry point for all API routes. It imports route files (like user, post, and category routes), sets up a default `/api` endpoint, and mounts all sub-routes under their respective paths (e.g., `/api/users`, `/api/posts`).

2. **Hooks in models/user.js**

- Hooks in the user model are special Sequelize lifecycle methods that execute automatically before or after certain actions.
They are typically used to perform tasks such as password hashing before a user record is created or updated.

- These hooks help ensure that sensitive data, like passwords, are securely handled and never stored in plaintext in the database.

3. **Where All API Routes Are Defined**

- All API routes are defined within the routes directory.
Each file inside this folder represents a different route module (for example, `user.js`, `post.js`, `category.js`).

- The `routes/index.js` file imports all these individual route modules and combines them under a unified router, which is then used by the main application file (such as `server.js` or `app.js`).

4. **How to Create a New Route `/api/students`**

- To create a new route for `/api/students`, follow these steps:

- Create a new route file inside the routes directory to handle student-related endpoints.

- Import the new route into `routes/index.js` and mount it under the path `/api/students`.

- After these updates, the new route will be available through the `/api/students` endpoint.

5. **How to Add Additional Data to the JWT**

- The JWT (JSON Web Token) is created and signed in the `utils/auth.js` file.
To include additional information in the JWT (for example, user role or profile ID), modify the payload that is signed when generating the token.

- By updating the signToken function in `utils/auth.js`, you can include any additional user data you want to embed in the token.