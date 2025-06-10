const API_KEY = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

const GIPHY_RANDOM_API_URL = "https://api.giphy.com/v1/gifs/random";


const fetchGifBtn = document.getElementById('fetchGifBtn');
const gifDisplayArea = document.getElementById('gifDisplayArea');
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


async function fetchAndDisplayRandomGif() {
    gifDisplayArea.innerHTML = '';
    hideMessage(errorMessage);
    displayMessage(loadingMessage, 'Loading GIF...');

    try {
        const url = `${GIPHY_RANDOM_API_URL}?api_key=${API_KEY}`;
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();

        const gifUrl = data.data.images.fixed_height.url;

        if (gifUrl) {
          
            const img = document.createElement('img');
            img.src = gifUrl;
            img.alt = "Random Giphy GIF";
            img.onerror = () => { 
                img.src = "https://placehold.co/200x200/cccccc/333333?text=Image+Error";
                img.alt = "Image failed to load";
                displayMessage(errorMessage, "GIF image failed to load.", true);
            };

       
            gifDisplayArea.appendChild(img);
        } else {
            throw new Error("No GIF URL found in the response.");
        }

    } catch (error) {
        console.error("An error occurred during GIF fetch:", error);
        displayMessage(errorMessage, `Failed to load GIF: ${error.message}`, true);
    } finally {
        hideMessage(loadingMessage); 
    }
}


fetchGifBtn.addEventListener('click', fetchAndDisplayRandomGif);
fetchAndDisplayRandomGif();