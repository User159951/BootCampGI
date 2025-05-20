
CREATE TABLE customer (
    customer_id SERIAL PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
)

CREATE TABLE customer_profile (
    profile_id SERIAL PRIMARY KEY,
    isLoggedIn BOOLEAN DEFAULT FALSE,
    customer_id INT,
    FOREIGN KEY (customer_id) REFERENCES customer(customer_id) ON DELETE CASCADE
)

INSERT INTO customer (first_name, last_name) VALUES
('John', 'Doe'),
('Jerome', 'Lalu'),
('Lea', 'Rive');

INSERT INTO customer_profile (isLoggedIn, customer_id) VALUES 
(true, SELECT customer_id FROM customer WHERE first_name = 'John'),
(false, SELECT customer_id FROM customer WHERE first_name = 'Jerome');

SELECT c.first_name FROM customer c JOIN customer_profile cp ON c.customer_id = cp.customer_id WHERE cp.isLoggedIn = true;

SELECT c.first_name, cp.isLoggedIn FROM customer c LEFT JOIN customer_profile cp ON c.customer_id = cp.customer_id;

SELECT COUNT(*) FROM customer c LEFT JOIN customer_profile cp ON c.customer_id = cp.customer_id WHERE cp.isLoggedIn IS NULL;


CREATE TABLE book (
    book_id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    author VARCHAR(100) NOT NULL,
);

INSERT INTO book (title, author) VALUES
('Alice In Wonderland', 'Lewis Carroll'),
('Harry Potter', 'J.K. Rowling');

CREATE TABLE student (
    student_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    age INT CHECK (age <= 15) 
)

INSERT INTO student (name, age) VALUES
('John', 12),
('Lera', 15);
('Patrick', 10),
('Bob', 14);

CREATE TABLE library (
    book_fk_id INT,
    student_id INT,
    borrowed_date DATE,
    FOREIGN KEY (book_fk_id) REFERENCES book(book_id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (student_id) REFERENCES student(student_id) ON DELETE CASCADE ON UPDATE CASCADE
);

INSERT INTO library (book_fk_id, student_id, borrowed_date) VALUES
(SELECT book_id FROM book WHERE title = 'Alice In Wonderland', SELECT student_id FROM student WHERE name = 'John', '15/02/2022'),
(SELECT book_id FROM book WHERE title = 'To kill a Mockingbird', SELECT student_id FROM student WHERE name = 'Bob', '03/03/2021'),
(SELECT book_id FROM book WHERE title = 'Alice In Wonderland', SELECT student_id FROM student WHERE name = 'Lera', '23/05/2021'),
(SELECT book_id FROM book WHERE title = 'Harry Potter', SELECT student_id FROM student WHERE name = 'Bob', '12/08/2021');

SELECT b.title, s.name, l.borrowed_date FROM library l
JOIN book b ON l.book_fk_id = b.book_id
JOIN student s ON l.student_id = s.student_id;

SELECT s.name, b.title FROM library l
JOIN book b ON l.book_fk_id = b.book_id
JOIN student s ON l.student_id = s.student_id;

SELECT AVG(s.age) AS average_age
FROM library l
JOIN book b ON l.book_fk_id = b.book_id
JOIN student s ON l.student_id = s.student_id
WHERE b.title = 'Alice In Wonderland';

DELETE FROM student WHERE name = 'Bob';
