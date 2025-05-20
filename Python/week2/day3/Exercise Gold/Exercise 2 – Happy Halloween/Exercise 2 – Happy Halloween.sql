SELECT COUNT(*) AS store_count, c.city, co.country
    FROM store s
    JOIN address a ON s.address_id = a.address_id
    JOIN city c ON a.city_id = c.city_id
    JOIN country co ON c.country_id = co.country_id
    GROUP BY s.store_id, c.city, co.country;

SELECT s.store_id, SUM(f.length)/60 AS total_viewing_time
    FROM store s
    JOIN inventory i ON s.store_id = i.store_id
    JOIN film f ON i.film_id = f.film_id
    GROUP BY s.store_id;

SELECT s.store_id, SUM(f.length)/60 AS total_viewing_time
    FROM store s
    JOIN inventory i ON s.store_id = i.store_id
    JOIN film f ON i.film_id = f.film_id
    JOIN rental r ON i.inventory_id = r.inventory_id
    WHERE r.return_date IS NOT NULL
    GROUP BY s.store_id;

SELECT DISTINCT c.first_name, c.last_name, ci.city
    FROM customer c
    JOIN address a ON c.address_id = a.address_id
    JOIN city ci ON a.city_id = ci.city_id
    JOIN store s ON a.address_id = s.address_id;

SELECT DISTINCT c.first_name, c.last_name, co.country
FROM customer c
JOIN address ca ON c.address_id = ca.address_id
JOIN city cci ON ca.city_id = cci.city_id
JOIN country co ON cci.country_id = co.country_id
WHERE co.country_id IN (
    SELECT DISTINCT ci.country_id
    FROM store s
    JOIN address a ON s.address_id = a.address_id
    JOIN city ci ON a.city_id = ci.city_id
);


SELECT SUM(f.length)/60 AS total_safe_viewing_time
    FROM film f
    JOIN film_category fc ON f.film_id = fc.film_id
    JOIN category c ON fc.category_id = c.category_id
    WHERE c.name != 'Horror'
        AND (f.title ILIKE '%beast%' OR f.title ILIKE '%monster%' OR f.title ILIKE '%ghost%' 
            OR f.title ILIKE '%dead%' OR f.title ILIKE '%zombie%' OR f.title ILIKE '%undead%'
            OR f.description ILIKE '%beast%' OR f.description ILIKE '%monster%' 
            OR f.description ILIKE '%ghost%' OR f.description ILIKE '%dead%' 
            OR f.description ILIKE '%zombie%' OR f.description ILIKE '%undead%');

SELECT SUM(f.length)/60 AS total_viewing_time_hours,
       SUM(f.length)/(60*24) AS total_viewing_time_days