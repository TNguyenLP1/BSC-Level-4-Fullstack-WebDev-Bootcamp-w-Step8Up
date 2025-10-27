# Working with CRUD and JSON

## Challenge

In this exercise, you will work with a simple Express backend that reads and writes data to a JSON file.

You will be provided with existing endpoints:

- `GET /data` – Retrieve all records.
- `GET /data/:id` – Retrieve a single record by its unique identifier.
- `POST /data` – Create a new record and store it in a JSON file.

Your task is to extend this backend by implementing:

- `PUT /data/:id` – Update an existing record.
- `DELETE /data/:id` – Delete a record from the JSON file.

By completing this exercise, you will achieve full CRUD functionality (Create, Read, Update, Delete) in an Express application.

---

## Key Learnings

- Understanding CRUD (Create, Read, Update, Delete) operations.
- Implementing different HTTP methods (`GET`, `POST`, `PUT`, `DELETE`) in Express.
- Working with file-based storage using JSON.
- Invoking and testing a REST API using Postman.

---

## User Story

As a developer,  
I want to build a RESTful API that performs CRUD operations on a JSON file,  
So that I can manage and manipulate data effectively.

---

## Acceptance Criteria

- [ ] Implement an Express server that reads and writes data to a `data.json` file.
- [ ] Ensure the following endpoints work correctly:
  - `GET /data` – Returns all records from `data.json`.
  - `GET /data/:id` – Returns a specific record by its unique `id`.
  - `POST /data` – Adds a new record to `data.json`.
- [ ] Implement `PUT /data/:id` to update an existing record.
- [ ] Implement `DELETE /data/:id` to remove a record from `data.json`.
- [ ] Use Postman to test all CRUD operations.

---

## Getting Started

1. Clone this repository and navigate into the project directory.
2. Run `npm install` to install dependencies.
3. Create a `server.js` file and set up a basic Express server.
4. Create a `data.json` file to store records in JSON format.

---

## Next Steps

- Implement the PUT /data/:id endpoint to update a record.
- Implement the DELETE /data/:id endpoint to remove a record.
- Use Postman to test all endpoints.

Happy Coding! 🚀
