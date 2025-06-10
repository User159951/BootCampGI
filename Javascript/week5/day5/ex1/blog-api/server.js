const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());


let posts = [
    { id: 1, title: 'First Blog Post', content: 'This is the content of the first post.' },
    { id: 2, title: 'Exploring Node.js', content: 'Node.js is a powerful JavaScript runtime.' },
    { id: 3, title: 'RESTful API Design', content: 'Designing APIs with principles of REST.' }
];

let nextId = posts.length > 0 ? Math.max(...posts.map(p => p.id)) + 1 : 1;


app.get('/posts', (req, res) => {
    console.log('GET /posts requested');
    res.json(posts);
});

app.get('/posts/:id', (req, res) => {
    console.log(`GET /posts/${req.params.id} requested`);
    const id = parseInt(req.params.id);
    const post = posts.find(p => p.id === id);

    if (post) {
        res.json(post);
    } else {
        res.status(404).json({ message: 'Post not found' });
    }
});

app.post('/posts', (req, res) => {
    console.log('POST /posts requested', req.body);
    const { title, content } = req.body;

    if (!title || !content) {
        return res.status(400).json({ message: 'Title and content are required' });
    }

    const newPost = {
        id: nextId++, 
        title,
        content
    };
    posts.push(newPost);
    res.status(201).json(newPost); 
});


app.put('/posts/:id', (req, res) => {
    console.log(`PUT /posts/${req.params.id} requested`, req.body);
    const id = parseInt(req.params.id);
    const { title, content } = req.body;

    const postIndex = posts.findIndex(p => p.id === id);

    if (postIndex === -1) {
        return res.status(404).json({ message: 'Post not found' });
    }

    if (!title || !content) {
        return res.status(400).json({ message: 'Title and content are required for update' });
    }

    posts[postIndex].title = title;
    posts[postIndex].content = content;

    res.json(posts[postIndex]);
});


app.delete('/posts/:id', (req, res) => {
    console.log(`DELETE /posts/${req.params.id} requested`);
    const id = parseInt(req.params.id);

    const initialLength = posts.length;
    posts = posts.filter(p => p.id !== id);

    if (posts.length < initialLength) {
        res.status(204).send(); // 204 No Content for successful deletion
    } else {
        res.status(404).json({ message: 'Post not found' });
    }
});


app.use((req, res, next) => {
    console.log(`404 Not Found: ${req.method} ${req.originalUrl}`);
    res.status(404).json({ message: 'Resource not found' });
});


app.use((err, req, res, next) => {
    console.error('Server Error:', err.stack); 
    res.status(500).json({ message: 'Something went wrong on the server', error: err.message });
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log('API Endpoints:');
    console.log(`  GET    /posts`);
    console.log(`  GET    /posts/:id`);
    console.log(`  POST   /posts (body: { title: "...", content: "..." })`);
    console.log(`  PUT    /posts/:id (body: { title: "...", content: "..." })`);
    console.log(`  DELETE /posts/:id`);
});