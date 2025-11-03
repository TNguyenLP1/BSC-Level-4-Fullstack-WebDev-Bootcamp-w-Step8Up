/* Retrieve all customers and their orders, including customers who have no orders */

SELECT 
    customers.id AS customer_id,
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

/* Retrieve all orders and their associated order items: */
SELECT 
    orders.id AS order_id,
    orders.order_date,
    orders.order_value,
    order_items.item_name,
    order_items.item_qty,
    order_items.item_value
FROM 
    orders
INNER JOIN 
    order_items
ON 
    orders.id = order_items.order_id;
