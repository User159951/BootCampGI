SELECT DISTINCT f.film_id, f.title
FROM film f
JOIN inventory i ON f.film_id = i.film_id
LEFT JOIN rental r ON i.inventory_id = r.inventory_id AND r.return_date IS NULL
WHERE f.rating IN ('G', 'PG') AND r.rental_id IS NULL;


CREATE TABLE children_waitlist (
  waitlist_id SERIAL PRIMARY KEY,
  film_id INT NOT NULL,
  child_name VARCHAR(100) NOT NULL,
  request_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (film_id) REFERENCES film(film_id)
);

SELECT f.title, COUNT(w.waitlist_id) AS waitlist_count
FROM children_waitlist w
JOIN film f ON w.film_id = f.film_id
WHERE f.rating IN ('G', 'PG')
GROUP BY f.title;