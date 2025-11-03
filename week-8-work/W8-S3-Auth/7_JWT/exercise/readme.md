# Understanding JSON Web Tokens (JWT)

## Challenge

In this exercise, you will learn what a JWT is and how it's used within modern web applications to authorize access to REST APIs. Using the provided simple Node.js application, you will:

- Install dependencies and set up the environment
- Create a `.env` file to store a secret key
- Generate a JWT from a `POST /login` request
- Analyze the generated JWT using [jwt.io](https://jwt.io/)

By the end of this exercise, you will understand the three core parts of a JWT and its role in authentication and authorization.

## Key Learnings

- What a JSON Web Token (JWT) is
- How to create and sign a JWT in Node.js
- Which Node.js libraries and methods to use for JWT creation
- The role of a JWT in the authentication lifecycle of a RESTful API

## User Story

**As a** backend developer,  
**I want to** generate and analyze a JWT,  
**So that I can** understand how it is structured and used for authentication.

## Steps to Complete the Exercise

### 1. Install Dependencies

Run the following command to install all necessary dependencies:

```sh
npm i
```

### 2. Configure the Environment

Clone the .env.example file to .env and create a new secret key:

```bash
cp .env.example .env
```

Then, open .env and set a secure SECRET_KEY:

```bash
SECRET_KEY=my_super_secret_key
```

### 3. Install jsonwebtoken

Install the jsonwebtoken package separately:

```bash
npm i jsonwebtoken
```

### 4. Run the Application

Start the application using:

```bash
npm run dev
```

### 5. Send a Login Request

Send a POST request to http://localhost:3001/login with the following JSON data:

```json
{
  "id": 1,
  "email": "user@example.com",
  "role": "admin"
}
```

### 6. Analyze the JWT

Copy the generated JWT from the response and analyze it using jwt.io:

- Verify its three parts: Header, Payload, and Signature
- Check if the payload matches the original data

Good luck!
