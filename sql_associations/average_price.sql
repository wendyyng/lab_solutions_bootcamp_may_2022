--Average Price
--Select the average order total price for the `Lightweight Marble Gloves ? Hat` product.
SELECT SUM(line_items.price * quantity)/COUNT(order_id)
FROM products
INNER JOIN line_items
ON products.id=product_id
WHERE products.name='Lightweight Marble Hat';