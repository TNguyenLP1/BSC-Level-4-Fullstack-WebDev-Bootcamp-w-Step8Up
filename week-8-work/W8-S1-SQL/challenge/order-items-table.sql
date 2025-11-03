mysql> -- Create the order_items table
Query OK, 0 rows affected (0.005 sec)

mysql> CREATE TABLE order_items (
    ->     id INT AUTO_INCREMENT PRIMARY KEY,     -- Unique item ID
    ->     order_id INT NOT NULL,                 -- References orders(id)
    ->     item_name VARCHAR(100) NOT NULL,       -- Name of the item
    ->     item_qty INT NOT NULL,                 -- Quantity of the item
    ->     item_value DECIMAL(10, 2) NOT NULL,    -- Value of the item (per unit)
    ->     FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE
    -> );
Query OK, 0 rows affected (0.400 sec)

mysql> notee
