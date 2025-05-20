CREATE TABLE items (
	item_id SERIAL PRIMARY KEY,
	item_name VARCHAR (50) NOT NULL,
	item_price NUMERIC NOT NULL
);

CREATE TABLE customers (
	customer_id SERIAL PRIMARY KEY,
	customer_firstname VARCHAR (100) NOT NULL,
	customer_lastname VARCHAR (100) NOT NULL
);