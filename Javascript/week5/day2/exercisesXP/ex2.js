const API_KEY = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
const searchTerm = "sun";
const limit = 10;
const offset = 2; 

const giphyApiUrl = `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&limit=${limit}&offset=${offset}&api_key=${API_KEY}`;

console.log("Fetching GIFs from URL:", giphyApiUrl);

fetch(giphyApiUrl)
  .then(response => {
    // Check the status of the Response
    if (!response.ok) {
      // If the response was not successful (e.g., 404, 500), throw an error
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    // Parse the JSON response body into a JavaScript object
    return response.json();
  })
  .then(data => {
    // Console.log the JavaScript Object that you receive
    console.log("Giphy API Response for 'sun' (JavaScript Object):", data);
  })
  .catch(error => {
    // Catch any occurring errors (network issues, HTTP errors, JSON parsing errors)
    console.error("An error occurred during the fetch operation:", error);
  });

