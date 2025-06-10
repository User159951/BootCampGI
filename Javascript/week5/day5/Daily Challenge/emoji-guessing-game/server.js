const express = require('express');
const app = express();
const PORT = 3000;

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Middleware to parse JSON request bodies
app.use(express.json());

// --- Game Data ---
// A larger set of emojis for better game variety
const emojis = [
    { emoji: '😀', name: 'Smile' }, { emoji: '🐶', name: 'Dog' }, { emoji: '🌮', name: 'Taco' },
    { emoji: '🚀', name: 'Rocket' }, { emoji: '🍕', name: 'Pizza' }, { emoji: '💡', name: 'Light Bulb' },
    { emoji: '🌈', name: 'Rainbow' }, { emoji: '📚', name: 'Books' }, { emoji: '🍓', name: 'Strawberry' },
    { emoji: '🤖', name: 'Robot' }, { emoji: '💻', name: 'Laptop' }, { emoji: '💡', name: 'Idea' },
    { emoji: '🎈', name: 'Balloon' }, { emoji: '🎉', name: 'Party Popper' }, { emoji: '🌟', name: 'Star' },
    { emoji: '🌍', name: 'Earth' }, { emoji: '🎶', name: 'Musical Notes' }, { emoji: '🚲', name: 'Bicycle' },
    { emoji: '⏰', name: 'Alarm Clock' }, { emoji: '🏆', name: 'Trophy' }, { emoji: '🌸', name: 'Cherry Blossom' },
    { emoji: '🔥', name: 'Fire' }, { emoji: '🌊', name: 'Wave' }, { emoji: '☀️', name: 'Sun' },
    { emoji: '🌙', name: 'Moon' }, { emoji: '❤️', name: 'Red Heart' }, { emoji: '🍔', name: 'Hamburger' },
    { emoji: '☕', name: 'Coffee' }, { emoji: '🎮', name: 'Video Game' }, { emoji: '✈️', name: 'Airplane' },
    { emoji: '🐧', name: 'Penguin' }, { emoji: '🦄', name: 'Unicorn' }, { emoji: '👑', name: 'Crown' },
    { emoji: '💰', name: 'Money Bag' }, { emoji: '🔑', name: 'Key' }, { emoji: '🎁', name: 'Gift' },
    { emoji: '👻', name: 'Ghost' }, { emoji: '🥶', name: 'Cold Face' }, { emoji: '🥳', name: 'Partying Face' }
];

// --- Leaderboard (in-memory, sorted by score descending) ---
let leaderboard = [
    { name: 'Player1', score: 10 },
    { name: 'Player2', score: 8 },
    { name: 'Player3', score: 5 }
].sort((a, b) => b.score - a.score);

// --- Helper Functions ---
// Gets a random element from an array
function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// Shuffles an array in place (Fisher-Yates)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// --- API Endpoints ---

// GET /api/emoji - Get a random emoji and multiple-choice options
app.get('/api/emoji', (req, res) => {
    const correctEmojiObj = getRandomElement(emojis); // Select a random correct emoji
    const correctName = correctEmojiObj.name;
    const correctEmojiChar = correctEmojiObj.emoji;

    // Generate incorrect options (distractors)
    let incorrectOptions = emojis
        .filter(e => e.name !== correctName) // Exclude the correct emoji from distractors
        .map(e => e.name); // Get only the names of possible distractors

    // Shuffle and pick 3 unique incorrect options.
    // If fewer than 3 available, it will pick fewer.
    incorrectOptions = shuffleArray(incorrectOptions).slice(0, 3);

    // Combine correct and incorrect options
    let options = [...incorrectOptions, correctName];
    options = shuffleArray(options); // Shuffle all options so correct answer isn't always last

    res.json({
        emoji: correctEmojiChar, // The emoji character to display
        options: options         // The multiple-choice options
    });
});

// POST /api/guess - Submit a player's guess
app.post('/api/guess', (req, res) => {
    const { emoji: guessedEmojiChar, guess } = req.body; // Extract emoji character and guessed name from request body

    if (!guessedEmojiChar || !guess) {
        return res.status(400).json({ message: 'Missing emoji character or guess in request.' });
    }

    // Find the actual correct emoji object based on the character sent by the client
    const correctEmojiObj = emojis.find(e => e.emoji === guessedEmojiChar);

    if (!correctEmojiObj) {
        return res.status(404).json({ message: 'Emoji character not found on server (invalid emoji).' });
    }

    // Compare the player's guess with the correct emoji's name (case-insensitive)
    const isCorrect = correctEmojiObj.name.toLowerCase() === guess.toLowerCase();

    // Respond with feedback
    res.json({
        isCorrect: isCorrect,
        correctName: correctEmojiObj.name // Provide the correct name for client feedback
    });
});

// GET /api/leaderboard - Get the current leaderboard
app.get('/api/leaderboard', (req, res) => {
    // Return a copy of the top 10 scores
    res.json(leaderboard.slice(0, 10));
});

// POST /api/leaderboard - Submit a new score to the leaderboard
app.post('/api/leaderboard', (req, res) => {
    const { name, score } = req.body; // Extract player name and score

    // Basic validation
    if (!name || typeof name !== 'string' || name.trim() === '' || typeof score !== 'number' || score < 0) {
        return res.status(400).json({ message: 'Invalid name or score provided.' });
    }

    // Add new score to leaderboard
    leaderboard.push({ name: name.trim(), score: score });
    // Re-sort the leaderboard by score descending
    leaderboard.sort((a, b) => b.score - a.score);
    // Keep only the top 10 entries
    leaderboard = leaderboard.slice(0, 10);

    // Respond with success message and the updated top 10 leaderboard
    res.status(201).json({ message: 'Score submitted successfully!', leaderboard: leaderboard.slice(0, 10) });
});


// --- Global Error Handling ---
// Catch-all for undefined routes
app.use((req, res, next) => {
    // For a simple game, redirect to home or send a basic 404
    res.status(404).sendFile(__dirname + '/public/404.html'); // You can create a 404.html
    // Or just: res.status(404).send('404 Not Found');
});

// General server error handler
app.use((err, req, res, next) => {
    console.error(err.stack); // Log the error stack for debugging
    res.status(500).send('Something went wrong on the server!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running... clicki hna bach dkhl => http://localhost:${PORT}`);
    console.log('API Endpoints:');
    console.log('  GET  /api/emoji');
    console.log('  POST /api/guess { emoji: "...", guess: "..." }');
    console.log('  GET  /api/leaderboard');
    console.log('  POST /api/leaderboard { name: "...", score: ... }');
});