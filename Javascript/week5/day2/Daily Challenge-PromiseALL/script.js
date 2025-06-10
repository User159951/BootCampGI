const API_KEY = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

const SUNRISE_API_BASE_URL = "https://api.sunrise-sunset.org/json";


const sunriseForm = document.getElementById('sunriseForm');
const lat1Input = document.getElementById('lat1');
const lon1Input = document.getElementById('lon1');
const lat2Input = document.getElementById('lat2');
const lon2Input = document.getElementById('lon2');
const resultsSection = document.getElementById('resultsSection');
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

function clearResults() {
    resultsSection.innerHTML = ''; // Clear previous results
    hideMessage(loadingMessage);
    hideMessage(errorMessage);
}


async function fetchSunrise(lat, lon) {
    const url = `${SUNRISE_API_BASE_URL}?lat=${lat}&lng=${lon}&date=today`;
    
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status} for lat: ${lat}, lon: ${lon}`);
    }

    const data = await response.json();

    // The API returns 'status: "OK"' for success, otherwise an error message
    if (data.status === "OK") {
        return data.results.sunrise; // Return the sunrise time
    } else {
        throw new Error(`API Error for lat: ${lat}, lon: ${lon} - ${data.status}`);
    }
}


async function handleSunriseFormSubmit(event) {
    event.preventDefault(); // Prevent default form submission (page reload)
    clearResults(); // Clear previous results and messages
    displayMessage(loadingMessage, 'Fetching sunrise data for both cities...');

    const lat1 = lat1Input.value;
    const lon1 = lon1Input.value;
    const lat2 = lat2Input.value;
    const lon2 = lon2Input.value;

    // Validate inputs (basic check)
    if (!lat1 || !lon1 || !lat2 || !lon2) {
        displayMessage(errorMessage, "Please enter valid coordinates for both cities.", true);
        hideMessage(loadingMessage);
        return;
    }

    try {
        // Create two promises for fetching sunrise data
        const promiseCity1 = fetchSunrise(lat1, lon1);
        const promiseCity2 = fetchSunrise(lat2, lon2);
        const [sunriseTime1, sunriseTime2] = await Promise.all([promiseCity1, promiseCity2]);

        // Display the results on the page
        resultsSection.innerHTML = `
            <h3>Sunrise Times:</h3>
            <p>City 1 (Lat: ${lat1}, Lon: ${lon1}): <span class="sunrise-time">${sunriseTime1}</span></p>
            <p>City 2 (Lat: ${lat2}, Lon: ${lon2}): <span class="sunrise-time">${sunriseTime2}</span></p>
        `;
        hideMessage(loadingMessage); // Hide loading message on success

    } catch (error) {
    
        console.error("Error fetching sunrise times:", error);
        displayMessage(errorMessage, `Failed to get sunrise times: ${error.message}`, true);
        hideMessage(loadingMessage); 
    }
}

sunriseForm.addEventListener('submit', handleSunriseFormSubmit);

lat1Input.value = "48.864716";
lon1Input.value = "2.349014";
lat2Input.value = "40.730610";
lon2Input.value = "-73.935242";