-- Calculate how many items in stock we've ever had for each product (remaining or sold) in the database
-- get the sold amount from line_items table
-- get the remaining quantity from products table
-- put them together is the total amount
SELECT products.id, products.name, (SUM(line_items.quantity) + products.remaining_quantity) AS total_quantity
FROM line_items
INNER JOIN products ON line_items.product_id = products.id
GROUP BY products.id
ORDER BY total_quantity DESC;

-- Find the average order total price for all the orders in the system
-- get the total price of each order
-- get average f this total price
-- select from table
SELECT SUM(quantity * price)/
(SELECT COUNT(*) FROM orders)
FROM orders
INNER JOIN line_items
ON order_id = orders.id;

-- Stretch
SELECT SUM(quantity * price)/
  COUNT(DISTINCT(order.id))
FROM orders
INNER JOIN line_items
ON order_id = order.id;