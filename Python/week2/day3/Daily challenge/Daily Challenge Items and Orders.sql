
CREATE TABLE product_orders (
    order_id SERIAL PRIMARY KEY,
    user_id INT,
    order_date DATE DEFAULT CURRENT_DATE,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);

CREATE TABLE items (
    item_id SERIAL PRIMARY KEY,
    order_id INT,
    item_name VARCHAR(100),
    price NUMERIC(10,2) NOT NULL,
    FOREIGN KEY (order_id) REFERENCES product_orders(order_id) ON DELETE CASCADE
);

CREATE OR REPLACE FUNCTION get_order_total(order_id_input INT)
RETURNS NUMERIC AS $$
DECLARE
    total_price NUMERIC;
BEGIN
    SELECT COALESCE(SUM(price), 0)
    INTO total_price
    FROM items
    WHERE order_id = order_id_input;

    RETURN total_price;
END;
$$ LANGUAGE plpgsql;

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

CREATE OR REPLACE FUNCTION get_user_order_total(user_id_input INT, order_id_input INT)
RETURNS NUMERIC AS $$
DECLARE
    total_price NUMERIC;
BEGIN
    SELECT COALESCE(SUM(i.price), 0)
    INTO total_price
    FROM items i
    JOIN product_orders po ON i.order_id = po.order_id
    WHERE po.user_id = user_id_input AND po.order_id = order_id_input;

    RETURN total_price;
END;
$$ LANGUAGE plpgsql;