SELECT rating, COUNT(rating) AS number_of_films FROM film GROUP BY rating; 

SELECT title, rating, length, rental_rate 
    FROM film 
    WHERE (rating = 'G' OR rating = 'PG-13') 
        AND length <= 2 * 60 
        AND rental_rate < 3.00 
    ORDER BY title ASC;

UPDATE customer 
    SET first_name = 'Touimy', last_name = 'Mehdi', email = 'email@email.com' 
    WHERE first_name='Mary' AND last_name='Smith';

UPDATE address SET address = 'Mehdiia' 
    FROM customer 
    WHERE customer.address_id = address.address_id AND customer.first_name = 'Touimy';

-- Exercise 2 :
UPDATE students	SET birth_date='02/11/1998'	
    WHERE (first_name = 'Marc' AND last_name ='Benichou') 
        OR (first_name = 'Lea' AND last_name = 'Benichou');


UPDATE students SET last_name = 'Guez' 
    WHERE first_name = 'David' AND last_name = 'Grez';




DELETE FROM students WHERE first_name = 'Lea' AND last_name = 'Benichou';




SELECT COUNT(*) FROM students;


SELECT COUNT(*) FROM students WHERE birth_date > '2000-01-01';

-- Exercise 3 :


DROP TABLE IF EXISTS purchases;

CREATE TABLE IF NOT EXISTS purchases
(
    purchase_id SERIAL PRIMARY KEY,
	customer_id integer NOT NULL,
	item_id integer NOT NULL,
	quantity_purchased integer NOT NULL,
	FOREIGN KEY (customer_id) REFERENCES customers (customer_id),
	FOREIGN KEY (item_id) REFERENCES items (item_id)
)



INSERT INTO purchases (customer_id, item_id, quantity_purchased)
	SELECT
		c.customer_id,
		i.item_id,
		1
	FROM
		customers c, items i
	WHERE
		c.customer_firstname = 'Scott' 
		AND c.customer_lastname = 'Scott'
		And i.item_name = 'Fan';

INSERT INTO purchases (customer_id, item_id, quantity_purchased)
	SELECT 
    	c.customer_id, 
		i.item_id, 
    	10
	FROM 
   		customers c, items i
	WHERE 
    	c.customer_firstname = 'Melanie' 
		AND c.customer_lastname = 'Johnson'
    	AND i.item_name = 'Large desk';

INSERT INTO purchases (customer_id, item_id, quantity_purchased)
	SELECT 
    	c.customer_id, 
    	i.item_id, 
    	2
	FROM 
    	customers c, items i
	WHERE 
    	c.customer_firstname = 'Greg' 
		AND c.customer_lastname = 'Jones'
    	AND i.item_name = 'Small Desk';


SELECT * FROM purchases;

SELECT p.purchase_id, c.customer_firstname, c.customer_lastname, i.item_name, p.quantity_purchased
    FROM purchases p
    JOIN customers c ON p.customer_id = c.customer_id
    JOIN items i ON p.item_id = i.item_id;

SELECT c.customer_firstname, c.customer_lastname, i.item_name, p.quantity_purchased
    FROM purchases p
    JOIN customers c ON p.customer_id = c.customer_id
    JOIN items i ON p.item_id = i.item_id
    WHERE c.customer_id = 5;

SELECT c.customer_firstname, c.customer_lastname, i.item_name, p.quantity_purchased
    FROM purchases p
    JOIN customers c ON p.customer_id = c.customer_id
    JOIN items i ON p.item_id = i.item_id
    WHERE i.item_name = 'Large desk' OR i.item_name = 'Small Desk';


SELECT DISTINCT c.customer_firstname, c.customer_lastname
    FROM purchases p
    JOIN customers c ON p.customer_id = c.customer_id;

SELECT DISTINCT c.customer_lastname
    FROM purchases p
    JOIN customers c ON p.customer_id = c.customer_id;

SELECT DISTINCT c.customer_id
    FROM purchases p
    JOIN customers c ON p.customer_id = c.customer_id;

INSERT INTO purchases (customer_id, item_id, quantity_purchased)
    VALUES (1, NULL, 1);
