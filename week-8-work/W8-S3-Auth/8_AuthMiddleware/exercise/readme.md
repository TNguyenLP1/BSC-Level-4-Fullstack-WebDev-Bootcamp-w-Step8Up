# Express Auth Middleware

## Challenge

In this exercise, you have an Express server ready to run with a middleware function for handling authentication.

There's a **GET** route at `http://localhost:3001/protected` that should only be accessible when a user is logged in. However, as it stands, this route is **not protected**, meaning anyone can access it regardless of whether they have a valid bearer token or not.

### Your Task

1. **Fix the Route**: Update `server.js` so that the `/protected` route is properly secured using authentication middleware.
2. **Understand the Middleware**: Study the `authenticateJWT` function and be prepared to explain:
   - How it validates a JWT (JSON Web Token).
   - What happens when the JWT is **valid** or **invalid**.

## Key Learnings

- How to protect Express routes using authentication middleware.
- How Express middleware validation methods work.
- How JWT authentication is implemented in Express.

## User Story

_As a developer, I want to ensure that protected routes in my Express application are only accessible to authenticated users so that sensitive data and functionalities remain secure._

## Acceptance Criteria

1. The `/protected` route should be inaccessible without a valid JWT.
2. The `authenticateJWT` middleware should correctly check the validity of the token:
   - If valid, allow access to the route.
   - If invalid or missing, return a `401 Unauthorized` response.
3. The server should continue to function correctly after implementing the fix.
4. You should be able to explain how the `authenticateJWT` function works, including how it processes tokens and handles errors.

## Getting Started

1. **Install Dependencies** (if not already installed):
   ```bash
   npm install
   ```
2. **Start the Server**

```bash
npm run start
```

3. **Register your user**

```postman
http://localhost:3001/register
```

using the following JSON body:

```json
{
  "username": "john_smith",
  "password": "password"
}
```

4. **Login using the newly registered account**

```postman
http://localhost:3001/login
```

```json
{
  "username": "john_smith",
  "password": "password"
}
```

5. **Test the /protected Route:**

1. Try accessing http://localhost:3001/protected without a token – it should return 401 Unauthorized.
1. Generate a valid JWT and include it in the Authorization header as Bearer <your_token> – you should now be able to access the route.

**_ HINT _**
What could be added to the following code in order to protect the route by ensuring it's authenticated?

```javascript
app.get("/protected", (req, res) => {
  res.json({ message: "This is a protected route", user: req.user });
});
```

## Resources

- [Express Middleware](https://expressjs.com/en/guide/writing-middleware.html)
- [jsonwebtoken (JWT) Package](https://www.npmjs.com/package/jsonwebtoken)
- [Understanding JWT Authentication](https://jwt.io/introduction)
