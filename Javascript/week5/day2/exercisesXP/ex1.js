const giphyApiUrl = "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

fetch(giphyApiUrl)
  .then(response => {
    if (!response.ok) {
      // If the response was not successful, throw an error
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    // Step 2: Parse the JSON response body into a JavaScript object
    return response.json();
  })
  .then(data => {
    // Step 3: Console.log the JavaScript Object that you receive
    console.log("Giphy API Response (JavaScript Object):", data);
  })
  .catch(error => {
    // Step 4: Catch any occurring errors (network errors, HTTP errors, JSON parsing errors)
    console.error("An error occurred during the fetch operation:", error);
  });

