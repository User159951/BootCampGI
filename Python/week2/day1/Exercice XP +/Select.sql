SELECT * FROM students;


SELECT first_name, last_name FROM students;


SELECT first_name, last_name FROM students WHERE id = 2;


SELECT first_name, last_name FROM students WHERE last_name = 'Benichou' AND first_name = 'Marc';


SELECT first_name, last_name FROM students WHERE last_name = 'Benichou' OR first_name = 'Marc';


SELECT first_name, last_name FROM students WHERE first_name LIKE '%a%';


SELECT first_name, last_name FROM students WHERE first_name LIKE 'a%';


SELECT first_name, last_name FROM students WHERE first_name LIKE '%a';


SELECT first_name, last_name FROM students WHERE first_name LIKE '_a%';


SELECT first_name, last_name FROM students WHERE id = 1 OR id = 3;


SELECT * FROM students WHERE birth_date >= '01/01/2000';