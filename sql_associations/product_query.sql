SELECT products.id FROM products
WHERE products.id not in (
SELECT products.id 
FROM products
INNER JOIN line_items
ON products.id=product_id
INNER JOIN orders
ON orders.id=order_id
WHERE completed_on > NOW()-INTERVAL '1' MONTH 
);