SELECT customer_firstname, customer_lastname
    FROM customers
    ORDER BY customer_firstname ASC, customer_lastname ASC
    LIMIT 2 OFFSET (
        SELECT COUNT(*) - 2 FROM customers
    );
DELETE FROM purchases WHERE customer_id = ( SELECT customer_id FROM customers WHERE customer_firstname = 'Scott');

SELECT * FROM customers WHERE customer_firstname = 'Scott';

SELECT 
    p.purchase_id,
    COALESCE(c.customer_firstname, '') AS customer_firstname,
    COALESCE(c.customer_lastname, '') AS customer_lastname,
    p.item_id,
    p.quantity_purchased
FROM 
    purchases p
LEFT JOIN 
    customers c ON p.customer_id = c.customer_id;

SELECT 
    p.purchase_id,
    c.customer_firstname,
    c.customer_lastname,
    p.item_id,
    p.quantity_purchased
FROM 
    purchases p
INNER JOIN 
    customers c ON p.customer_id = c.customer_id;