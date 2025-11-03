mysql> -- Create the orders table
Query OK, 0 rows affected (0.007 sec)

mysql> CREATE TABLE orders (
    ->     id INT AUTO_INCREMENT PRIMARY KEY,     -- Unique order ID
    ->     customer_id INT NOT NULL,              -- References customers(id)
    ->     order_date DATE NOT NULL,              -- Date of the order
    ->     order_value DECIMAL(10, 2) NOT NULL,   -- Total value of the order
    ->     FOREIGN KEY (customer_id) REFERENCES customers(id) ON DELETE CASCADE
    -> );
Query OK, 0 rows affected (0.423 sec)

mysql> notee
