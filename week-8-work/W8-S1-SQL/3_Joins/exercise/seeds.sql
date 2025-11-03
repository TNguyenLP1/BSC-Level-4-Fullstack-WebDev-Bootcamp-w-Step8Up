-- Step 1: Create the Sales database
CREATE DATABASE IF NOT EXISTS Sales;
USE Sales;

-- Step 2: Create the customers table
CREATE TABLE customers (
    id INT AUTO_INCREMENT PRIMARY KEY,    -- Unique customer ID
    customer_name VARCHAR(50) NOT NULL,  -- Customer's name
    country VARCHAR(50) NOT NULL         -- Customer's country
);

-- Step 3: Create the orders table
CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,     -- Unique order ID
    customer_id INT NOT NULL,              -- References customers(id)
    order_date DATE NOT NULL,              -- Date of the order
    order_value DECIMAL(10, 2) NOT NULL,   -- Total value of the order
    FOREIGN KEY (customer_id) REFERENCES customers(id) ON DELETE CASCADE
);

-- Step 4: Create the order_items table
CREATE TABLE order_items (
    id INT AUTO_INCREMENT PRIMARY KEY,     -- Unique item ID
    order_id INT NOT NULL,                 -- References orders(id)
    item_name VARCHAR(100) NOT NULL,       -- Name of the item
    item_qty INT NOT NULL,                 -- Quantity of the item
    item_value DECIMAL(10, 2) NOT NULL,    -- Value of the item (per unit)
    FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE
);

-- Step 5: Insert example data into customers
INSERT INTO customers (customer_name, country)
VALUES 
    ('Alice Johnson', 'USA'),
    ('Brian Smith', 'Canada'),
    ('Cynthia Lee', 'UK'),
    ('David Garcia', 'Australia'),
    ('Emma Martinez', 'Germany');

-- Step 6: Insert example data into orders
INSERT INTO orders (customer_id, order_date, order_value)
VALUES
    (1, '2024-11-01', 1425.00),  -- Order by Alice Johnson
    (2, '2024-11-02', 735.00),   -- Order by Brian Smith
    (3, '2024-11-03', 1200.00),  -- Order by Cynthia Lee
    (4, '2024-11-04', 350.00),   -- Order by David Garcia
    (5, '2024-11-05', 2000.00);  -- Order by Emma Martinez

-- Step 7: Insert example data into order_items
INSERT INTO order_items (order_id, item_name, item_qty, item_value)
VALUES
    -- Items for Alice Johnson's order
    (1, 'Laptop', 1, 1200.00),
    (1, 'Wireless Mouse', 1, 50.00),
    (1, 'Laptop Bag', 1, 100.00),
    (1, 'USB-C Hub', 2, 75.00),

    -- Items for Brian Smith's order
    (2, 'Monitor', 1, 500.00),
    (2, 'HDMI Cable', 2, 15.00),
    (2, 'Mechanical Keyboard', 1, 220.00),

    -- Items for Cynthia Lee's order
    (3, 'Tablet', 1, 800.00),
    (3, 'Stylus', 1, 100.00),
    (3, 'Screen Protector', 1, 50.00),
    (3, 'Tablet Case', 1, 250.00),

    -- Items for David Garcia's order
    (4, 'Headphones', 1, 300.00),
    (4, 'Charging Cable', 2, 50.00),

    -- Items for Emma Martinez's order
    (5, 'Desktop Computer', 1, 1500.00),
    (5, 'Webcam', 1, 100.00),
    (5, 'External Hard Drive', 1, 300.00),
    (5, 'Keyboard and Mouse Combo', 1, 100.00);
