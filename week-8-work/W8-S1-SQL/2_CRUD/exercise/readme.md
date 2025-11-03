# Working with SQL

## Challenge

In this exercise, you will create your first database, create a new table, and populate it with data. Your task is to:

1. Create a new database called `bootcamp`.
2. Inside the database, create a table called `students` with the following fields:

   - `student_name` (`VARCHAR(30)`): The name of the student.
   - `github_username` (`VARCHAR(30)`): The GitHub username of the student.
   - `favourite_technology` (`VARCHAR(30)`): The student's favorite technology, chosen from the following options:  
     `html/css`, `react`, `python`, `django`, `JavaScript`, `other`.

3. Populate the table with data representing all the members of your Breakout Room and their preferences using `INSERT` queries.
4. Write a `SELECT` query to retrieve all students who prefer `React`.

## Key Learnings

By completing this exercise, you will:

- Learn how to create a SQL database and define tables with typed fields.
- Understand how to use `INSERT` queries to populate a table with data.
- Use `SELECT` queries to filter and retrieve specific data from a table.

## User Story

As a database administrator,  
I want to create a database to store student information and preferences,  
So that I can easily query the data to find students with specific interests.

## Acceptance Criteria

- [ ] A database named `bootcamp` is successfully created.
- [ ] A table named `students` is created with the specified fields and data types.
- [ ] The table is populated with data using `INSERT` queries.
- [ ] A `SELECT` query is written to retrieve all students whose `favourite_technology` is `React`.

## Instructions

1. **Login to the MySQL Server**

   - Open your terminal or command prompt.
   - Login to the MySQL server using the following command:
     ```bash
     mysql -u root -p
     ```
   - Enter your MySQL root password when prompted. You will then be connected to the MySQL server.

2. **Create the Database**

   - Use the following SQL command to create the `bootcamp` database:
     ```sql
     CREATE DATABASE bootcamp;
     ```
   - Switch to the `bootcamp` database:
     ```sql
     USE bootcamp;
     ```

3. **Create the Table**

   - Define the `students` table with the specified fields:
     ```sql
     CREATE TABLE students (
       ......
     );
     ```

4. **Populate the Table**

   - Insert records into the `students` table for all the members of your Breakout Room. Example:
     ```sql
     INSERT INTO students (student_name, github_username, favourite_technology)
     VALUES ('Alice Johnson', 'alice123', 'react');
     ```

5. **Write the SELECT Query**
   - Write a query to retrieve all students who prefer `React`

## Additional Resources

- [MySQL Tutorial](https://www.mysqltutorial.org/)
- [SQL SELECT Statement](https://www.w3schools.com/sql/sql_select.asp)
- [SQL CREATE TABLE Statement](https://www.w3schools.com/sql/sql_create_table.asp)

## Example Output

After completing the exercise, you should have a database with the following structure and sample data:

### Sample Data in `students` Table:

| student_name  | github_username | favourite_technology |
| ------------- | --------------- | -------------------- |
| Alice Johnson | alice123        | react                |
| Bob Smith     | bobdev          | python               |
| Charlie Lee   | charliecodes    | react                |
| Dana Wright   | danadesigns     | html/css             |

### Query Result for Students Preferring `React`:

| student_name  | github_username | favourite_technology |
| ------------- | --------------- | -------------------- |
| Alice Johnson | alice123        | react                |
| Charlie Lee   | charliecodes    | react                |
