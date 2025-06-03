// --- Global State ---
let quotes = [
    { id: 0, author: "Albert Einstein", quote: "Imagination is more important than knowledge.", likes: 0 },
    { id: 1, author: "Maya Angelou", quote: "If you don't like something, change it. If you can't change it, change your attitude.", likes: 0 },
    { id: 2, author: "Oscar Wilde", quote: "Be yourself; everyone else is already taken.", likes: 0 },
    { id: 3, author: "Walt Disney", quote: "All our dreams can come true, if we have the courage to pursue them.", likes: 0 },
    { id: 4, author: "Mark Twain", quote: "The secret of getting ahead is getting started.", likes: 0 },
    { id: 5, author: "Eleanor Roosevelt", quote: "The future belongs to those who believe in the beauty of their dreams.", likes: 0 },
    { id: 6, author: "Steve Jobs", quote: "Your time is limited, don't waste it living someone else's life.", likes: 0 },
    { id: 7, author: "Albert Einstein", quote: "Logic will get you from A to B. Imagination will take you everywhere.", likes: 0 },
    { id: 8, author: "Maya Angelou", quote: "Nothing can dim the light that shines from within.", likes: 0 },
];

let nextId = quotes.length; // Tracks the next available ID for new quotes
let previousQuoteId = -1;   // Stores the ID of the last displayed quote to prevent repetition
let currentQuote = null;    // Stores the currently displayed quote object

let filteredQuotesByAuthor = []; // Stores quotes after author filtering
let currentFilteredIndex = -1;   // Index within the filteredQuotesByAuthor array

// --- DOM Elements ---
const quoteTextElem = document.getElementById('quoteText');
const quoteAuthorElem = document.getElementById('quoteAuthor');
const quoteLikesElem = document.getElementById('quoteLikes');
const generateQuoteBtn = document.getElementById('generateQuoteBtn');

// Part 2 Buttons
const charCountBtn = document.getElementById('charCountBtn');
const charCountNoSpacesBtn = document.getElementById('charCountNoSpacesBtn');
const wordCountBtn = document.getElementById('wordCountBtn');
const likeBtn = document.getElementById('likeBtn');

// Part 2 Add Quote Form
const addQuoteForm = document.getElementById('addQuoteForm');
const newQuoteTextarea = document.getElementById('newQuoteText');
const newQuoteAuthorInput = document.getElementById('newQuoteAuthor');

// Part 3 Filter Form
const filterAuthorForm = document.getElementById('filterAuthorForm');
const filterAuthorNameInput = document.getElementById('filterAuthorName');
const filterNavigationDiv = document.querySelector('.filter-navigation');
const prevQuoteBtn = document.getElementById('prevQuoteBtn');
const nextQuoteBtn = document.getElementById('nextQuoteBtn');
const clearFilterBtn = document.getElementById('clearFilterBtn');


// --- Functions ---

// Part 1: Display a single quote
function displayQuote(quoteObj) {
    currentQuote = quoteObj; // Update global currentQuote
    quoteTextElem.textContent = `"${quoteObj.quote}"`;
    quoteAuthorElem.textContent = quoteObj.author;
    quoteLikesElem.textContent = `Likes: ${quoteObj.likes}`;
    // Show buttons if they were hidden by filter logic
    filterNavigationDiv.style.display = 'none'; // Hide filter nav if not filtered
    // Ensure core action buttons are visible if they were hidden
    document.querySelector('.action-buttons').style.display = 'flex';
}

// Part 1: Generate a random quote
function generateRandomQuote() {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (quotes[randomIndex].id === previousQuoteId && quotes.length > 1); // Avoid same quote twice in a row

    previousQuoteId = quotes[randomIndex].id; // Store current quote's ID
    displayQuote(quotes[randomIndex]);
}

// Part 2: Add a new quote
function addQuote(event) {
    event.preventDefault(); // Prevent page reload
    const quote = newQuoteTextarea.value.trim();
    const author = newQuoteAuthorInput.value.trim();

    if (quote && author) {
        const newQuote = {
            id: nextId++, // Assign current nextId then increment
            author: author,
            quote: quote,
            likes: 0
        };
        quotes.push(newQuote);
        alert('Quote added successfully!');
        addQuoteForm.reset(); // Clear form fields
        // Optionally display the newly added quote or regenerate a random one
        displayQuote(newQuote); 
    } else {
        alert('Please fill in both quote and author fields.');
    }
}

// Part 2: Character Count (incl. spaces)
function showCharCount() {
    if (currentQuote) {
        alert(`Character count (incl. spaces): ${currentQuote.quote.length}`);
    } else {
        alert("Generate a quote first!");
    }
}

// Part 2: Character Count (no spaces)
function showCharCountNoSpaces() {
    if (currentQuote) {
        const count = currentQuote.quote.replace(/\s/g, '').length;
        alert(`Character count (no spaces): ${count}`);
    } else {
        alert("Generate a quote first!");
    }
}

// Part 2: Word Count
function showWordCount() {
    if (currentQuote) {
        // Split by one or more whitespace characters, then filter out empty strings (e.g., from double spaces)
        const words = currentQuote.quote.split(/\s+/).filter(word => word !== '');
        alert(`Word count: ${words.length}`);
    } else {
        alert("Generate a quote first!");
    }
}

// Part 2: Like Quote
function likeQuote() {
    if (currentQuote) {
        // Find the quote in the main array and increment its likes
        const quoteIndex = quotes.findIndex(q => q.id === currentQuote.id);
        if (quoteIndex !== -1) {
            quotes[quoteIndex].likes++;
            // Update the currently displayed quote's likes in global state and DOM
            currentQuote.likes = quotes[quoteIndex].likes;
            quoteLikesElem.textContent = `Likes: ${currentQuote.likes}`;
        }
    } else {
        alert("Generate a quote first to like it!");
    }
}

// Part 3: Filter quotes by author
function filterQuotesByAuthor(event) {
    event.preventDefault(); // Prevent page reload
    const authorName = filterAuthorNameInput.value.trim();

    if (authorName) {
        filteredQuotesByAuthor = quotes.filter(q => 
            q.author.toLowerCase().includes(authorName.toLowerCase())
        );

        if (filteredQuotesByAuthor.length > 0) {
            currentFilteredIndex = 0; // Start with the first filtered quote
            displayQuote(filteredQuotesByAuthor[currentFilteredIndex]);
            filterNavigationDiv.style.display = 'flex'; // Show nav buttons
            // Optionally hide "generate random" or other buttons during filter mode
            document.querySelector('.action-buttons').style.display = 'none'; // Hide general action buttons
        } else {
            alert(`No quotes found for author "${authorName}".`);
            filterNavigationDiv.style.display = 'none';
        }
    } else {
        alert('Please enter an author name to filter.');
        filterNavigationDiv.style.display = 'none';
    }
}

// Part 3: Navigate filtered quotes
function navigateFilteredQuotes(direction) {
    if (filteredQuotesByAuthor.length === 0) return;

    if (direction === 'next') {
        currentFilteredIndex++;
        if (currentFilteredIndex >= filteredQuotesByAuthor.length) {
            currentFilteredIndex = 0; // Loop back to the start
        }
    } else if (direction === 'prev') {
        currentFilteredIndex--;
        if (currentFilteredIndex < 0) {
            currentFilteredIndex = filteredQuotesByAuthor.length - 1; // Loop to the end
        }
    }
    displayQuote(filteredQuotesByAuthor[currentFilteredIndex]);
}

// Part 3: Clear Filter
function clearFilter() {
    filteredQuotesByAuthor = [];
    currentFilteredIndex = -1;
    filterAuthorNameInput.value = ''; // Clear filter input
    filterNavigationDiv.style.display = 'none'; // Hide nav buttons
    document.querySelector('.action-buttons').style.display = 'flex'; // Show general action buttons
    generateRandomQuote(); // Display a random quote again
}

// --- Event Listeners ---
generateQuoteBtn.addEventListener('click', generateRandomQuote);

// Part 2 Listeners
charCountBtn.addEventListener('click', showCharCount);
charCountNoSpacesBtn.addEventListener('click', showCharCountNoSpaces);
wordCountBtn.addEventListener('click', showWordCount);
likeBtn.addEventListener('click', likeQuote);
addQuoteForm.addEventListener('submit', addQuote);

// Part 3 Listeners
filterAuthorForm.addEventListener('submit', filterQuotesByAuthor);
prevQuoteBtn.addEventListener('click', () => navigateFilteredQuotes('prev'));
nextQuoteBtn.addEventListener('click', () => navigateFilteredQuotes('next'));
clearFilterBtn.addEventListener('click', clearFilter);

// --- Initial Setup ---
// Display a random quote when the page loads
if (quotes.length > 0) {
    generateRandomQuote();
} else {
    quoteTextElem.textContent = "No quotes available. Add some!";
    quoteAuthorElem.textContent = "";
    quoteLikesElem.textContent = "";
}