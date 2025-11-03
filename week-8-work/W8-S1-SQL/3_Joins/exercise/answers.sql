/* List All Customers and Their Orders (LEFT JOIN) */

SELECT 
    customers.customer_name,
    customers.country,
    orders.id AS order_id,
    orders.order_date,
    orders.order_value
FROM 
    customers
LEFT JOIN 
    orders
ON 
    customers.id = orders.customer_id;


/* Find Orders Greater Than $1000 (INNER JOIN + WHERE) */

SELECT 
    customers.customer_name,
    orders.id AS order_id,
    orders.order_value
FROM 
    customers
INNER JOIN 
    orders
ON 
    customers.id = orders.customer_id
WHERE 
    orders.order_value > 1000;

/* List Orders and Order Items (INNER JOIN + Sorting) */
SELECT 
    orders.id AS order_id,
    orders.order_date,
    order_items.item_name,
    order_items.item_qty,
    order_items.item_value
FROM 
    orders
INNER JOIN 
    order_items
ON 
    orders.id = order_items.order_id
ORDER BY 
    orders.order_date DESC;


/* Find Customers Who Ordered Specific Items (Filters + INNER JOIN) */

SELECT 
    customers.customer_name,
    orders.order_date,
    order_items.item_name
FROM 
    customers
INNER JOIN 
    orders
ON 
    customers.id = orders.customer_id
INNER JOIN 
    order_items
ON 
    orders.id = order_items.order_id
WHERE 
    order_items.item_name = 'Laptop';

/* Calculate Total Order Value by Customer (Aggregations + GROUP BY) */

SELECT 
    customers.customer_name,
    SUM(orders.order_value) AS total_order_value
FROM 
    customers
INNER JOIN 
    orders
ON 
    customers.id = orders.customer_id
GROUP BY 
    customers.customer_name
ORDER BY 
    total_order_value DESC;
