--Select all the products that have been purchased in the last 54 months.
-- WHERE orders.completed_on BETWEEN '2017-10-01' AND '2021-06-16'
-- WHERE orders.completed_on > NOW() - INTERVAL '54' MONTH
SELECT * FROM products 
INNER JOIN line_items ON line_items.product_id = products.id
INNER JOIN orders ON line_items.order_id = orders.id
WHERE orders.completed_on > NOW() - INTERVAL '54' MONTH

--Select the top 10 products in terms of last year's gross sales.
-- get the total price of the product => price * quantity
-- get the top 10 of these products
-- add the condition => last year
SELECT products.id, SUM(line_items.price * line_items.quantity) AS total FROM products
INNER JOIN line_items ON line_items.product_id = products.id
INNER JOIN orders ON line_items.order_id = orders.id
WHERE orders.completed_on > NOW() - INTERVAL '54' MONTH
GROUP BY products.id
ORDER BY total DESC
LIMIT 10;

-- Select all the products that weren't purchased during the last 24 months.
-- get all the product that have been purchased during the last 24 months.
-- get the products which are not inside step 1
-- IN // NOT IN
SELECT products.id FROM products WHERE products.id NOT IN
(SELECT products.id FROM products
INNER JOIN line_items ON line_items.product_id = products.id
INNER JOIN orders ON line_items.order_id = orders.id
WHERE orders.completed_on > NOW() - INTERVAL '54' MONTH)