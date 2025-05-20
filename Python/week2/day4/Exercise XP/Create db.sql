CREATE DATABASE restaurant;

CREATE TABLE IF NOT EXISTS menu_item (
    item_id SERIAL PRIMARY KEY,
    item_name VARCHAR(30) NOT NULL,
    item_price SMALLINT DEFAULT 0
);