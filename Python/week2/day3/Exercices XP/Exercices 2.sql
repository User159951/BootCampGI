UPDATE film SET language_id = 3
    WHERE title IN ('Airport Pollock', 'Academy Dinosaur', 'Affair Prejudice');


DROP TABLE IF EXISTS customer_review;

SELECT COUNT(*) FROM rental WHERE return_date IS NULL;

SELECT f.title, f.rental_rate
    FROM film f
    JOIN inventory i ON f.film_id = i.film_id
    JOIN rental r ON i.inventory_id = r.inventory_id
    WHERE r.return_date IS NULL
    ORDER BY f.rental_rate DESC
    LIMIT 30;


SELECT f.title, f.description
    FROM film f
    JOIN film_actor fa ON f.film_id = fa.film_id
    JOIN actor a ON fa.actor_id = a.actor_id
    WHERE f.description ILIKE '%sumo wrestler%'
        AND a.first_name = 'Penelope'
        AND a.last_name = 'Monroe';

SELECT f.title, f.description
    FROM film f
    WHERE f.length < 60
        AND f.rating = 'R';
  
SELECT f.title, f.description
    FROM film f
    JOIN inventory i ON f.film_id = i.film_id
    JOIN rental r ON i.inventory_id = r.inventory_id
    JOIN customer c ON r.customer_id = c.customer_id
    WHERE c.first_name = 'Matthew'
        AND c.last_name = 'Mahan'
        AND r.rental_date BETWEEN '2005-07-28' AND '2005-08-01'
        AND r.return_date IS NOT NULL
        AND f.rental_rate > 4.00;


SELECT f.title, f.description
    FROM film f
    JOIN inventory i ON f.film_id = i.film_id
    JOIN rental r ON i.inventory_id = r.inventory_id
    JOIN customer c ON r.customer_id = c.customer_id
    WHERE c.first_name = 'Matthew'
        AND c.last_name = 'Mahan'
        AND (f.title ILIKE '%boat%' OR f.description ILIKE '%boat%')
        AND f.replacement_cost > 20.00;