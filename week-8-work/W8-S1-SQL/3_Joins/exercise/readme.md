# SQL Query Challenges: Learning Joins, Filters, and Sorting

## Challenge Overview

This exercise consists of 5 SQL query challenges designed to help you practice using `JOINs`, filtering with `WHERE`, and sorting with `ORDER BY`. You will work with the `Sales` database, focusing on the relationships between `customers`, `orders`, and `order_items`.

### Key Learnings:

- How to combine tables using `INNER JOIN` and `LEFT JOIN`.
- Filtering results with `WHERE` clauses.
- Sorting data with `ORDER BY`.

---

## Challenge 1: List All Customers and Their Orders (LEFT JOIN)

Retrieve a list of all customers and their orders. Include customers who have not placed any orders.

### Task:

Write a query to:

1. Display the `customer_name`, `country`, `order_id`, `order_date`, and `order_value`.
2. Ensure that customers without orders are also included.

### Hint:

Use a `LEFT JOIN` to join `customers` and `orders`.

#### Expected Output:

All customers will appear in the results. If a customer has no orders, `order_id`, `order_date`, and `order_value` will show `NULL`.

---

## Challenge 2: Find Orders Greater Than $1000 (INNER JOIN + WHERE)

Retrieve all orders and their associated customers where the order value is greater than $1000.

### Task:

Write a query to:

1. Display the `customer_name`, `order_id`, and `order_value`.
2. Include only orders where the `order_value` exceeds $1000.

### Hint:

Use an `INNER JOIN` between `customers` and `orders`, and filter results using a `WHERE` clause.

#### Expected Output:

Only orders with a value greater than $1000 will appear in the results, along with the customer who placed them.

---

## Challenge 3: List Orders and Order Items (INNER JOIN + Sorting)

Retrieve all order items, including the order date and item name, sorted by the order date in descending order.

### Task:

Write a query to:

1. Display the `order_id`, `order_date`, `item_name`, `item_qty`, and `item_value`.
2. Sort the results by `order_date` in descending order.

### Hint:

Use an `INNER JOIN` between `orders` and `order_items`, and apply `ORDER BY` on `order_date`.

#### Expected Output:

A list of order items, with the newest orders appearing first.

---

## Challenge 4: Find Customers Who Ordered Specific Items (Filters + INNER JOIN)

Retrieve the names of customers who ordered a "Laptop". Include the item name and order date in the results.

### Task:

Write a query to:

1. Display the `customer_name`, `order_date`, and `item_name`.
2. Include only rows where the `item_name` is "Laptop".

### Hint:

Chain multiple `INNER JOIN`s to join `customers`, `orders`, and `order_items`. Use `WHERE` to filter by `item_name`.

#### Expected Output:

Only customers who ordered a "Laptop" will appear, along with the order details.

---

---

### How to Run These Queries:

1. Ensure the `Sales` database and tables are created and populated with the sample data.
2. Run each query in your SQL environment (e.g., MySQL Workbench, phpMyAdmin, or terminal).
3. Compare the results to the expected output and adjust as needed.
4. Experiment with modifications to deepen your understanding of SQL.

Happy querying!
