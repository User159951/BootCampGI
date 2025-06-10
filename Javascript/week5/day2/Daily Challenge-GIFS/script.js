const API_KEY = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
const GIPHY_RANDOM_API_URL = "https://api.giphy.com/v1/gifs/random";


const gifForm = document.getElementById('gifForm');
const categoryInput = document.getElementById('categoryInput');
const gifContainer = document.getElementById('gifContainer');
const deleteAllGifsBtn = document.getElementById('deleteAllGifsBtn');
const loadingMessage = document.getElementById('loadingMessage');
const errorMessage = document.getElementById('errorMessage');


function displayMessage(element, message, isError = false) {
    element.textContent = message;
    element.classList.remove('hidden');
    element.classList.toggle('error-text', isError);
}


function hideMessage(element) {
    element.classList.add('hidden');
}


async function fetchRandomGif(category) {
    hideMessage(errorMessage); 
    displayMessage(loadingMessage, 'Loading GIF...'); 

    try {
        const url = `${GIPHY_RANDOM_API_URL}?api_key=${API_KEY}&tag=${encodeURIComponent(category)}`;
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();

    
        if (data.data && data.data.images && data.data.images.fixed_height && data.data.images.fixed_height.url) {
            appendGifToDOM(data.data.images.fixed_height.url);
        } else {
            throw new Error(`No GIF found for category: "${category}". Try another one!`);
        }
    } catch (error) {
        console.error("Error fetching GIF:", error);
        displayMessage(errorMessage, `Failed to load GIF: ${error.message}`, true);
    } finally {
        hideMessage(loadingMessage); 
    }
}


function appendGifToDOM(gifUrl) {
    const gifCard = document.createElement('div');
    gifCard.classList.add('gif-card');

    const img = document.createElement('img');
    img.src = gifUrl;
    img.alt = "Random Giphy";
    img.onerror = () => { 
        img.src = "https://placehold.co/200x200/cccccc/333333?text=Image+Error";
        img.alt = "Image failed to load";
    };

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'DELETE';
    deleteBtn.classList.add('btn', 'delete-gif-btn');
    deleteBtn.addEventListener('click', () => {
        gifCard.remove(); 
    });

    gifCard.appendChild(img);
    gifCard.appendChild(deleteBtn);
    gifContainer.prepend(gifCard); 
}


function handleFormSubmit(event) {
    event.preventDefault(); 
    const category = categoryInput.value.trim();

    if (category) {
        fetchRandomGif(category);
        categoryInput.value = ''; 
    } else {
        displayMessage(errorMessage, "Please enter a category to search for a GIF.", true);
    }
}


function handleDeleteAllGifs() {
    if (confirm("Are you sure you want to delete all GIFs?")) {
        gifContainer.innerHTML = ''; 
        hideMessage(errorMessage); 
    }
}


gifForm.addEventListener('submit', handleFormSubmit);
deleteAllGifsBtn.addEventListener('click', handleDeleteAllGifs);


hideMessage(loadingMessage);
hideMessage(errorMessage);