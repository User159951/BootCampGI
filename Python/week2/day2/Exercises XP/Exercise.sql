SELECT * FROM items ORDER BY item_price ASC;

SELECT * FROM items WHERE item_price >= 80 ORDER BY item_price DESC;

SELECT customer_firstname, customer_lastname
	FROM customers ORDER BY customer_firstname ASC FETCH FIRST 3 ROWS ONLY ;


SELECT customer_lastname
	FROM customers ORDER BY customer_lastname DESC;


-- Exercise 2: 

SELECT * FROM customer;

SELECT CONCAT(first_name, ' ', last_name) AS full_name FROM customer;

SELECT DISTINCT create_date FROM customer;

SELECT DISTINCT actor_id, COUNT(oscars) FROM actor GROUP BY actor_id;

SELECT * FROM customer ORDER BY first_name DESC;


SELECT film_id, title, description, release_year, rental_rate FROM film ORDER BY rental_rate ASC;


SELECT CONCAT(address, ' ', address2, ' ', district, ' ', postal_code) AS address, phone FROM address WHERE district = 'Texas';


SELECT * FROM film GROUP BY film_id HAVING film_id = 15 or film_id = 150;


SELECT film_id, title, description, length, rental_rate FROM film WHERE title = 'star wars';

 
SELECT film_id, title, description, length, rental_rate FROM film WHERE title ILIKE 'St%';

SELECT * FROM film  ORDER BY rental_rate ASC LIMIT 10;

SELECT * FROM film  ORDER BY rental_rate ASC OFFSET 10 LIMIT 10;

SELECT * FROM customer INNER JOIN payment ON customer.customer_id = payment.customer_id ORDER BY customer.customer_id ASC;

SELECT * FROM film WHERE film_id NOT IN (SELECT film_id FROM inventory);

SELECT city.city_id, city.city, country.country_id, country.country FROM city INNER JOIN country ON city.country_id = country.country_id;

SELECT customer.customer_id, customer.first_name, customer.last_name, payment.amount, payment.payment_date, staff.staff_id
    FROM customer INNER JOIN payment ON customer.customer_id = payment.customer_id
    INNER JOIN staff ON payment.staff_id = staff.staff_id ORDER BY staff.staff_id ASC;