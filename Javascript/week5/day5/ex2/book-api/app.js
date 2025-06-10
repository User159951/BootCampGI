const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());

let books = [
    { id: 1, title: 'The Hitchhiker\'s Guide to the Galaxy', author: 'Douglas Adams', publishedYear: 1979 },
    { id: 2, title: '1984', author: 'George Orwell', publishedYear: 1949 },
    { id: 3, title: 'Pride and Prejudice', author: 'Jane Austen', publishedYear: 1813 },
    { id: 4, title: 'To Kill a Mockingbird', author: 'Harper Lee', publishedYear: 1960 }
];

// Helper to determine the next available ID
let nextBookId = books.length > 0 ? Math.max(...books.map(book => book.id)) + 1 : 1;

app.get('/api/books', (req, res) => {
    console.log('GET /api/books requested');
    res.json(books); 
});

app.get('/api/books/:bookId', (req, res) => {
    const bookId = parseInt(req.params.bookId); 
    console.log(`GET /api/books/${bookId} requested`);

    const book = books.find(b => b.id === bookId); 

    if (book) {
        res.status(200).json(book);
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
});

app.post('/api/books', (req, res) => {
    console.log('POST /api/books requested', req.body);
    const { title, author, publishedYear } = req.body; 

    if (!title || !author || !publishedYear) {
        return res.status(400).json({ message: 'Title, author, and publishedYear are required' });
    }

    const newBook = {
        id: nextBookId++, 
        title,
        author,
        publishedYear
    };

    books.push(newBook); 

    res.status(201).json(newBook);
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log('Available Endpoints:');
    console.log(`  GET  /api/books`);
    console.log(`  GET  /api/books/:bookId`);
    console.log(`  POST /api/books (body: { "title": "...", "author": "...", "publishedYear": ... })`);
});