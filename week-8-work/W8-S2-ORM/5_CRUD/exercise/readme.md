# CRUD Operations with Sequelize

## Challenge

The code in the exercise folder uses the same `posts` model; however, the files are organized into a structure that allows for better scaling as the project grows.

- The `models` folder contains the Sequelize models.
- The `routes` folder contains the API route definitions.
- The `models/post.js` file contains logic for interacting with the `posts` database using the `Posts` model.

You will find examples for:

- `GET /api/posts/` - Retrieve all post records
- `GET /api/posts/:id` - Retrieve a single post record using its unique identifier
- `POST /api/posts` - Create a new post record

### Your Task

Follow the `TODO` prompts in `models/posts.js` to:

- Implement **update functionality** for posts
- Implement **delete functionality** for posts

Use the examples, comments, and Sequelize documentation to guide you.

## Key Learnings

- How to use the `.update()` method on a Sequelize model
- How to use the `.destroy()` method on a Sequelize model

## User Story

**As a** backend developer,  
**I want to** complete the missing update and delete operations in the API,  
**So that** users can modify and remove posts as needed.

## Acceptance Criteria

1. **Set Up the Project**

   - Install dependencies:
     ```sh
     npm install
     ```
   - Start the server:
     ```sh
     npm run start
     ```

2. **Implement Update Functionality**

   - Modify `models/posts.js` to add logic for updating a post
   - The API should accept a `PUT` request to `/api/posts/:id`
   - The request body should contain updated `title`, `content`, or `postedBy` values
   - The response should confirm the update or return an error

3. **Implement Delete Functionality**

   - Modify `models/posts.js` to add logic for deleting a post
   - The API should accept a `DELETE` request to `/api/posts/:id`
   - The response should confirm the deletion or return an error

4. **Test the API**
   - Use **Postman** or another API client to:
     - **GET** all posts:
       ```
       GET http://localhost:3001/api/posts
       ```
     - **GET** a specific post:
       ```
       GET http://localhost:3001/api/posts/:id
       ```
     - **POST** a new post:
       ```json
       {
         "title": "New Post",
         "content": "This is an example post.",
         "postedBy": "Jane Doe"
       }
       ```
     - **PUT** (update) an existing post:
       ```
       PUT http://localhost:3001/api/posts/:id
       ```
     - **DELETE** a post:
       ```
       DELETE http://localhost:3001/api/posts/:id
       ```

Good luck!
