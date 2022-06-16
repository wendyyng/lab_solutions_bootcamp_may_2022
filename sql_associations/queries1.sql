--Find the average line_item total price (meaning quantity * price) for each order that were completed in January 2016 month.

SELECT orders.id, orders.completed_on, AVG(line_items.quantity * line_items.price) AS avg_total_prices
FROM line_items
INNER JOIN orders
ON line_items.order_id = orders.id
WHERE orders.completed_on BETWEEN '2016-01-01' AND '2016-01-31'
GROUP BY orders.id;
ORDER BY orders.id;

--Select product names, product prices and the lowest price they were sold at during the last 50 months
SELECT p.name, p.price, MIN(li.price) AS lowest_price
FROM line_items as li
INNER JOIN products AS p ON li.products_id = p.id
INNER JOIN orders AS o ON li.order_id = o.id
WHERE o.completed_on > NOW() - INTERVAL '50' MONTH
GROUP BY p.id
