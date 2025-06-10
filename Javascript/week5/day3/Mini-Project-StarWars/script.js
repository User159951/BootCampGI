console.log('ver 2.3 simplified with async/await');

// Select elements in DOM
const button = document.querySelector('#button');
const names = document.querySelector('#name');
const height = document.querySelector('#height');
const gender = document.querySelector('#gender');
const birthYear = document.querySelector('#birth-year');
const homeWorld = document.querySelector('#home-world');

// Base URL for SWAPI people
const SWAPI_PEOPLE_BASE_URL = 'https://www.swapi.tech/api/people/';

/**
 * Fetches and displays random Star Wars character and their homeworld data.
 * Uses async/await for cleaner asynchronous operations.
 */
async function getInfo() {
    updateWithLoading(); // Show loading state

    try {
        // Generate a random person ID (1 to 82, as some IDs might be missing)
        const randomNumber = Math.floor(Math.random() * 82) + 1;
        const personApiUrl = `${SWAPI_PEOPLE_BASE_URL}${randomNumber}/`;

        // --- Fetch Person Data ---
        const personResponse = await fetch(personApiUrl);
        if (!personResponse.ok) {
            throw new Error(`Failed to fetch character (Status: ${personResponse.status})`);
        }
        const personData = await personResponse.json();
        const character = personData.result.properties; // Extract character properties

        // --- Fetch Homeworld Data ---
        // Ensure homeworld URL uses HTTPS if it comes as HTTP
        const homeworldUrl = new URL(character.homeworld);
        homeworldUrl.protocol = 'https:';

        const homeworldResponse = await fetch(homeworldUrl.href);
        if (!homeworldResponse.ok) {
            throw new Error(`Failed to fetch homeworld (Status: ${homeworldResponse.status})`);
        }
        const homeworldData = await homeworldResponse.json();
        const planetName = homeworldData.result.properties.name; // Extract planet name

        // Display the retrieved information
        updateInfo(character, planetName);

    } catch (error) {
        console.error('Error in getInfo:', error);
        updateInfoWithError(error.message); // Display specific error message
    }
}

/**
 * Updates the DOM with character and homeworld information.
 * @param {Object} character - The character properties object.
 * @param {string} planetName - The name of the character's homeworld.
 */
function updateInfo(character, planetName) {
    names.innerText = character.name;
    height.innerText = `Height: ${character.height}`;
    gender.innerText = `Gender: ${character.gender}`;
    birthYear.innerText = `Birth Year: ${character.birth_year}`;
    homeWorld.innerText = `Home World: ${planetName}`;
}

/**
 * Displays an error message on the DOM.
 * @param {string} message - The error message to display.
 */
function updateInfoWithError(message = 'Oh No! That person isn\'t available.') {
    names.innerText = 'Error!';
    height.innerText = message;
    gender.innerText = '';
    birthYear.innerText = '';
    homeWorld.innerText = '';
}

/**
 * Displays a loading spinner and clears previous data.
 */
function updateWithLoading() {
    names.innerHTML = '<i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i> <p>Loading...</p>';
    height.innerText = '';
    gender.innerText = '';
    birthYear.innerText = '';
    homeWorld.innerText = '';
}

// Add event listener to the button
button.addEventListener('click', getInfo);

// Initial load when the page first loads
getInfo();
