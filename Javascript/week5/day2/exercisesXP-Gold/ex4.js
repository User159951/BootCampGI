const urls = [
    "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholder.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/albums"
];
const getData = async function() {
    try {
        const [users, posts, albums] = await Promise.all(
            urls.map(async (url) => { 
                const response = await fetch(url); 
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status} from ${url}`);
                }
                return await response.json();
            })
        );

        console.log('users', users);
        console.log('posts', posts); 
        console.log('albums', albums);

    } catch (error) {
        console.log('ooooooops');
        console.error("Detailed error:", error);
    }
};

getData();

