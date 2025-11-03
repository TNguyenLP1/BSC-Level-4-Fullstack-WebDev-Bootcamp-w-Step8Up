mysql> -- Create the customers table
Query OK, 0 rows affected (0.004 sec)

mysql> CREATE TABLE customers (
    ->     id INT AUTO_INCREMENT PRIMARY KEY,    -- Unique customer ID
    ->     customer_name VARCHAR(100) NOT NULL,  -- Customer's name
    ->     country VARCHAR(50) NOT NULL         -- Customer's country
    -> );
Query OK, 0 rows affected (0.414 sec)

mysql> notee
