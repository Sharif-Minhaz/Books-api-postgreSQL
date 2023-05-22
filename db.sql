CREATE DATABASE booksDB;

CREATE TABLE book (
    id CHAR(20) PRIMARY KEY,
    name VARCHAR(20),
    author VARCHAR(20),
    description VARCHAR(255) 
);

INSERT INTO book (id, name, author, description)
VALUES
("1c645163-5d1f-462d", "Nineteen Eighty-Four", "George Orwel", "Nineteen Eighty-Four (also published as 1984) is a dystopian social science fiction novel and cautionary tale by English writer George Orwell.");

SELECT * FROM book;

SELECT * FROM book WHERE id='1c6';

DELETE FROM book WHERE id='2c2'

UPDATE book
SET name='something', description='some description'
WHERE id='3c8'