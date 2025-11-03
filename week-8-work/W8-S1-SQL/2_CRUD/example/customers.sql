-- Create the 'customers' database if it doesn't already exist
CREATE DATABASE IF NOT EXISTS customers;

-- Use the 'customers' database
USE customers;

-- Create the 'customers' table
CREATE TABLE customers (
    id INT AUTO_INCREMENT PRIMARY KEY, -- Primary key with auto-increment
    name VARCHAR(30) NOT NULL,         -- Customer name, cannot be null
    account_limit INT,                 -- Account limit as an integer
    on_hold TINYINT(1) DEFAULT 0,      -- Boolean field to indicate if the account is on hold (0 or 1)
    created_date DATETIME DEFAULT CURRENT_TIMESTAMP, -- Date when the record was created
    primary_contact VARCHAR(30),       -- Name of the primary contact
    address VARCHAR(120),              -- Address of the customer
    phone VARCHAR(30),                 -- Phone number
    email VARCHAR(80)                  -- Email address
);
