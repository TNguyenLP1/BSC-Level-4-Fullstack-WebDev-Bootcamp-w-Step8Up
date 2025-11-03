
/* get all columns from the customers table */
SELECT * 
FROM customers;

/* get only the name and email columns from the customers table */
SELECT name, phone, email 
FROM customers;

/* get all columns from the customers table where the account is on hold */
SELECT id, name, account_limit, on_hold 
FROM customers
WHERE on_hold = 1;

/* get all columns from the customers table where the account limit is greater than 5000 */
SELECT name, account_limit 
FROM customers
WHERE account_limit > 5000;

/* get name and created_date columns from the customers table, ordered by created_date in descending order */
SELECT name, created_date 
FROM customers
ORDER BY created_date DESC;

/* Update the account limit for Alice Johnson */
UPDATE customers
SET account_limit = 10000
WHERE name = 'Alice Johnson';

/* Place all customers with an account limit below 3000 on hold: */
UPDATE customers
SET on_hold = 1
WHERE account_limit < 3000;

/* Reset the on_hold status for all customers: */
UPDATE customers
SET on_hold = 0;

/* Delete the customer with ID 5: */
DELETE FROM customers
WHERE id = 5;

/* Delete all customers with an account limit below 2000: */
DELETE FROM customers
WHERE account_limit < 2000;

/* Delete all customers created before January 1, 2024, and currently on hold: */
DELETE FROM customers
WHERE on_hold = 1 AND created_date < '2024-01-01';

/* Delete all records from the 'customers' table: */
DELETE FROM customers;

