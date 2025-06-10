const axios = require('axios'); 

const JSONPLACEHOLDER_API_URL = 'https://jsonplaceholder.typicode.com';
async function fetchPosts() {
    try {
        const response = await axios.get(`${JSONPLACEHOLDER_API_URL}/posts`);
        console.log('Successfully fetched posts.');
        return response.data;
    } catch (error) {
        console.error('Error fetching posts:', error.message);
        throw new Error(`Failed to fetch posts: ${error.message}`);
    }
}

module.exports = {
    fetchPosts
};

console.log("dataService.js: fetchPosts function defined and exported.");