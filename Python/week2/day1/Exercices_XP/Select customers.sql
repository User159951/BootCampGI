SELECT customer_id, customer_firstname, customer_lastname
	FROM public.customers;

SELECT * FROM customers WHERE customer_lastname = 'Smith'; -- Outcome is an empty table

SELECT * FROM customers WHERE customer_lastname = 'Jones';

SELECT * FROM customers WHERE customer_lastname != 'Scott';