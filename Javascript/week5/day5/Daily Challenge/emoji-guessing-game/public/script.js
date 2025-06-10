let currentEmoji = null; // Stores the current emoji object received from the server {emoji: '...', options: [...]}
let score = 0;
let totalGuesses = 0;

// --- DOM Elements ---
const emojiDisplay = document.getElementById('emojiDisplay');
const optionsContainer = document.getElementById('optionsContainer');
const feedbackMessage = document.getElementById('feedbackMessage');
const scoreDisplay = document.getElementById('scoreDisplay');
const totalGuessesDisplay = document.getElementById('totalGuessesDisplay');
const startNewGameBtn = document.getElementById('startNewGameBtn');
const submitScoreBtn = document.getElementById('submitScoreBtn');
const leaderboardList = document.getElementById('leaderboardList');

// Modals
const submitScoreModal = document.getElementById('submitScoreModal');
const playerNameInput = document.getElementById('playerNameInput');
const submitScoreConfirmBtn = document.getElementById('submitScoreConfirmBtn');
const submitScoreCancelBtn = document.getElementById('submitScoreCancelBtn');

const feedbackModal = document.getElementById('feedbackModal');
const feedbackModalTitle = document.getElementById('feedbackModalTitle');
const feedbackModalMessage = document.getElementById('feedbackModalMessage');
const feedbackModalNextBtn = document.getElementById('feedbackModalNextBtn');


// --- API Calls ---


async function fetchNewEmojiAndOptions() {
    optionsContainer.innerHTML = '<button class="option-btn" disabled>Loading...</button>'; // Disable during load
    feedbackMessage.textContent = ''; // Clear previous feedback
    feedbackMessage.classList.remove('correct', 'incorrect');
    emojiDisplay.textContent = '❓'; // Placeholder emoji

    try {
        const response = await fetch('/api/emoji');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        currentEmoji = data; // Store the fetched emoji and its options
        renderEmojiAndOptions(); // Update the UI
    } catch (error) {
        console.error('Error fetching emoji:', error);
        feedbackMessage.textContent = 'Failed to load emoji. Please try again.';
        feedbackMessage.classList.add('incorrect');
    }
}


async function submitGuess(guess) {
    if (!currentEmoji) return; // Guard against guessing before an emoji is loaded

    totalGuesses++; // Increment total guesses for score tracking
    scoreDisplay.textContent = score; // Update score display immediately after guess

    try {
        const response = await fetch('/api/guess', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            // Send the actual emoji character displayed to the server for validation
            body: JSON.stringify({ emoji: currentEmoji.emoji, guess: guess }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        handleGuessFeedback(data.isCorrect, data.correctName); // Show feedback based on server response

    } catch (error) {
        console.error('Error submitting guess:', error);
        feedbackMessage.textContent = 'Error submitting guess. Try again.';
        feedbackMessage.classList.add('incorrect');
    }
}

async function fetchLeaderboard() {
    leaderboardList.innerHTML = '<li>Loading leaderboard...</li>'; // Show loading state
    try {
        const response = await fetch('/api/leaderboard');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        renderLeaderboard(data); // Update the UI with fetched leaderboard
    } catch (error) {
        console.error('Error fetching leaderboard:', error);
        leaderboardList.innerHTML = '<li>Failed to load leaderboard.</li>'; // Show error state
    }
}


async function submitScoreToLeaderboard(name, finalScore) {
    try {
        const response = await fetch('/api/leaderboard', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: name, score: finalScore }),
        });

        if (!response.ok) {
            // Check for specific error messages from server if available
            const errorBody = await response.json();
            throw new Error(`HTTP error! Status: ${response.status}: ${errorBody.message || 'Unknown error'}`);
        }

        // Successfully submitted, refresh leaderboard and provide feedback
        alert('Score submitted successfully!');
        fetchLeaderboard(); // Refresh leaderboard
    } catch (error) {
        console.error('Error submitting score:', error);
        alert(`Failed to submit score: ${error.message}`);
    }
}


function renderEmojiAndOptions() {
    if (!currentEmoji) {
        emojiDisplay.textContent = '❓';
        optionsContainer.innerHTML = '';
        return;
    }

    emojiDisplay.textContent = currentEmoji.emoji; // Display the emoji character
    optionsContainer.innerHTML = ''; // Clear previous options

    // Create a button for each option
    currentEmoji.options.forEach(optionName => {
        const button = document.createElement('button');
        button.classList.add('option-btn');
        button.textContent = optionName;
        button.dataset.name = optionName; // Store the name as a data attribute for easy retrieval on click
        button.addEventListener('click', handleOptionClick); // Attach click handler
        optionsContainer.appendChild(button);
    });
}


function renderLeaderboard(board) {
    leaderboardList.innerHTML = ''; // Clear existing list
    if (board.length === 0) {
        leaderboardList.innerHTML = '<li>No scores yet. Be the first!</li>';
        return;
    }
    // Create list item for each leaderboard entry
    board.forEach((entry, index) => {
        const li = document.createElement('li');
        li.innerHTML = `<span>${index + 1}. ${entry.name}</span> <span>${entry.score}</span>`;
        leaderboardList.appendChild(li);
    });
}


function startNewGame() {
    score = 0;
    totalGuesses = 0;
    scoreDisplay.textContent = score;
    totalGuessesDisplay.textContent = totalGuesses;
    fetchNewEmojiAndOptions(); // Get the first emoji for the new game
    feedbackMessage.textContent = ''; // Clear feedback
    feedbackMessage.classList.remove('correct', 'incorrect');
    optionsContainer.querySelectorAll('button').forEach(btn => btn.disabled = false); // Ensure buttons are enabled
}


function handleGuessFeedback(isCorrect, correctName) {
    if (isCorrect) {
        score++; // Increment score only if correct
        scoreDisplay.textContent = score; // Update score display
        feedbackModalTitle.textContent = 'Correct! 🎉';
        feedbackModalTitle.classList.remove('incorrect');
        feedbackModalTitle.classList.add('correct');
        feedbackModalMessage.textContent = `You guessed it! It was indeed "${correctName}".`;
    } else {
        feedbackModalTitle.textContent = 'Incorrect! 😢';
        feedbackModalTitle.classList.remove('correct');
        feedbackModalTitle.classList.add('incorrect');
        feedbackModalMessage.textContent = `Oops! The correct answer was "${correctName}".`;
    }
    feedbackModal.classList.remove('hidden'); // Show the feedback modal
    // Disable all option buttons after a guess to prevent multiple submissions for one emoji
    optionsContainer.querySelectorAll('button').forEach(btn => btn.disabled = true);
}


// --- Event Handlers ---

function handleOptionClick(event) {
    const guessedName = event.target.dataset.name; // Get the emoji name from the data attribute
    submitGuess(guessedName); // Submit the guess
}


function handleStartNewGameClick() {
    startNewGame();
}


function handleSubmitScoreClick() {
    // Only allow submission if player has made at least one guess
    if (totalGuesses === 0) {
        alert("Play at least one round to submit a score!");
        return;
    }
    playerNameInput.value = ''; // Clear previous input
    submitScoreModal.classList.remove('hidden'); // Show the submit score modal
}


async function handleSubmitScoreConfirmClick() {
    const playerName = playerNameInput.value.trim();
    if (playerName) {
        await submitScoreToLeaderboard(playerName, score); // Submit score to backend
        submitScoreModal.classList.add('hidden'); // Hide modal
        startNewGame(); // Start a new game after submission
    } else {
        alert('Please enter your name to submit your score!');
    }
}


function handleFeedbackModalNextClick() {
    feedbackModal.classList.add('hidden'); // Hide the feedback modal
    fetchNewEmojiAndOptions(); // Fetch the next emoji
}


// --- Event Listeners ---
startNewGameBtn.addEventListener('click', handleStartNewGameClick);
submitScoreBtn.addEventListener('click', handleSubmitScoreClick);
submitScoreConfirmBtn.addEventListener('click', handleSubmitScoreConfirmClick);
submitScoreCancelBtn.addEventListener('click', () => submitScoreModal.classList.add('hidden')); // Close submit score modal
feedbackModalNextBtn.addEventListener('click', handleFeedbackModalNextClick); // Close feedback modal


document.addEventListener('DOMContentLoaded', () => {
    startNewGame(); // Initialize game state and fetch first emoji
    fetchLeaderboard(); // Load initial leaderboard
});