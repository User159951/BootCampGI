SELECT f.title, f.rental_rate, r.rental_date
    FROM film f
    JOIN inventory i ON f.film_id = i.film_id
    JOIN rental r ON i.inventory_id = r.inventory_id
    WHERE r.return_date IS NULL;

SELECT c.first_name, c.last_name, COUNT(r.rental_id) AS rentals_out
    FROM customer c
    JOIN rental r ON c.customer_id = r.customer_id
    WHERE r.return_date IS NULL
    GROUP BY c.customer_id;

SELECT f.title, f.description
    FROM film f
    JOIN film_category fc ON f.film_id = fc.film_id
    JOIN category c ON fc.category_id = c.category_id
    JOIN film_actor fa ON f.film_id = fa.film_id
    JOIN actor a ON fa.actor_id = a.actor_id
    WHERE c.name = 'Action'
        AND a.first_name = 'Joe'
        AND a.last_name = 'Swank';