# SQL Group By and Aggregate Functions Exercise

## Challenge Overview

This exercise focuses on using the `GROUP BY` clause and aggregate functions such as `SUM()`, `COUNT()`, and `AVG()` to analyze data in the `Sales` database. You'll work with the `customers`, `orders`, and `order_items` tables to calculate summaries and group data effectively.

### Key Learnings:

- Understand how to group data using `GROUP BY`.
- Use aggregate functions like `SUM()`, `COUNT()`, and `AVG()` to calculate totals, counts, and averages.
- Combine filtering with grouping for more detailed insights.

---

## Challenge 1: Calculate Total Order Value by Customer

For each customer, calculate the total value of all their orders.

### Task:

Write a query to:

1. Display the `customer_name` and the total value of their orders (`total_order_value`).
2. Sort the results by `total_order_value` in descending order.

### Hint:

Use `SUM()` to calculate the total value of orders and `GROUP BY` to group by `customer_name`.

---

## Challenge 2: Count the Number of Orders Per Customer

Find out how many orders each customer has placed.

### Task:

Write a query to:

1. Display the `customer_name` and the number of orders (`order_count`).
2. Sort the results by `order_count` in descending order.

### Hint:

Use `COUNT()` to count the number of orders for each customer.

---

## Challenge 3: Calculate Average Order Value by Customer

Determine the average order value for each customer.

### Task:

Write a query to:

1. Display the `customer_name` and the average order value (`avg_order_value`).
2. Sort the results by `avg_order_value` in descending order.

### Hint:

Use `AVG()` to calculate the average order value for each customer.

---

## Challenge 4: Find the Total Quantity of Items Ordered Per Order

For each order, calculate the total quantity of items ordered.

### Task:

Write a query to:

1. Display the `order_id` and the total quantity of items (`total_item_qty`).
2. Sort the results by `total_item_qty` in descending order.

### Hint:

Use `SUM()` on the `item_qty` column and group by `order_id`.

---

## Challenge 5: Find the Most Popular Item

Determine which item has been ordered the most, based on the total quantity.

### Task:

Write a query to:

1. Display the `item_name` and the total quantity ordered (`total_qty`).
2. Sort the results by `total_qty` in descending order.
3. Limit the results to show only the most popular item.

### Hint:

Use `SUM()` on `item_qty` and group by `item_name`. Apply `LIMIT 1` to show only the top result.

---

## Bonus Challenge:

Combine `GROUP BY` with a `HAVING` clause to filter grouped data. For example:

1. Show only customers whose total order value exceeds $1000.
2. Display items ordered more than 10 times.

---

### How to Run These Queries:

1. Ensure the `Sales` database and tables are created and populated with the sample data.
2. Run each query in your SQL environment (e.g., MySQL Workbench, phpMyAdmin, or terminal).
3. Experiment with modifications to deepen your understanding of `GROUP BY` and aggregate functions.

Happy querying!
