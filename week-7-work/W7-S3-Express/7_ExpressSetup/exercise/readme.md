# Getting Started with Express and Node

## Challenge

Express is a popular and flexible Node package that allows you to create your own web server and handle HTTP requests server-side.

In this exercise, you will:

1. Install dependencies using `npm install` based on the `package.json` file.
2. Install Express by running `npm i express`.
3. Set up a simple Express server by adding a start script to `server.js`.
4. Start the server using `npm run start`.
5. Use Postman to interact with the server:
   - Send a `GET` request to `http://localhost:3001`.
   - Send a `POST` request to `http://localhost:3001/echo` to receive a message.

---

## Key Learnings

- Understanding what Express is and how to install it.
- Running an Express server and handling HTTP requests.
- Using Postman to send requests to the server.
- Sending and receiving JSON payloads with Express.

---

## User Story

As a developer,  
I want to set up an Express server,  
So that I can handle HTTP requests and responses efficiently.

---

## Acceptance Criteria

- [ ] Install project dependencies using `npm install`.
- [ ] Install Express using `npm i express`.
- [ ] Create a `server.js` file that initializes an Express server.
- [ ] Add a start script to `package.json` (e.g., `"start": "node server.js"`).
- [ ] Start the server using `npm run start`.
- [ ] Ensure the server responds to:
  - A `GET` request at `http://localhost:3001` with a welcome message.
  - A `GET` request at `http://localhost:3001/echo` with a predefined response.
  - A `POST` request at `http://localhost:3001` that echoes back the received JSON payload.
- [ ] Use Postman to verify all the API endpoints work as expected.

---

## Getting Started

1. Clone this repository and navigate into the project directory.
2. Run `npm install` to install dependencies.
3. Run `npm i express` to install Express.
4. Add a start script to package.json:

```json
"scripts": {
    "start": "node server.js"
}
```

5. Run npm run start to start the server.
6. Use Postman to test the endpoints that you can see in server.js

Happy Coding! 🚀
