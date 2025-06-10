// crud-api/app.js
const express = require('express');
const app = express();
const PORT = 5000;
const dataService = require('./data/dataService'); 

app.use(express.json());


app.get('/', (req, res) => {
    res.send('Welcome to the CRUD API! Server is running.');
});

app.get('/api/posts', async (req, res) => {
    console.log('app.js: GET /api/posts requested.');
    try {
        const posts = await dataService.fetchPosts();
        res.json(posts); 
        console.log('app.js: Data successfully retrieved from JSONPlaceholder and sent as response.');
    } catch (error) {
        console.error('app.js: Error in /api/posts endpoint:', error.message);
        res.status(500).json({ message: 'Failed to retrieve posts from external API.', error: error.message });
    }
});


// --- Server Start ---
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log('Available Endpoints:');
    console.log(`  GET  /`);
    console.log(`  GET  /api/posts  (Fetches posts from JSONPlaceholder)`);
});