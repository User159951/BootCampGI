// PART I: ASSETS - The provided robots array
const robots = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      image: 'https://robohash.org/1?200x200'
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      image: 'https://robohash.org/2?200x200'
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      image: 'https://robohash.org/3?200x200'
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      image: 'https://robohash.org/4?200x200'
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      image: 'https://robohash.org/5?200x200'
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
      image: 'https://robohash.org/6?200x200'
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
      image: 'https://robohash.org/7?200x200'
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
      image: 'https://robohash.org/8?200x200'
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
      image:'https://robohash.org/9?200x200'
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
      image:'https://robohash.org/10?200x200'
    }
];

// Get references to DOM elements
const searchInput = document.getElementById('searchInput');
const cardList = document.getElementById('cardList');
const noResultsMessage = document.getElementById('noResultsMessage');

// Function to create and display robot cards
// PART I: The website - Creates cards using values from the array
function displayRobots(robotArray) {
    cardList.innerHTML = ''; // Clear existing cards
    
    // PART II: The filter - Show/hide no results message
    if (robotArray.length === 0) {
        noResultsMessage.classList.remove('hidden');
        return; // Stop if no robots to display
    } else {
        noResultsMessage.classList.add('hidden');
    }

    // Using forEach to iterate and create cards
    robotArray.forEach(robot => {
        // Object destructuring for easier access to properties
        const { id, name, email, image } = robot;

        // Create DOM elements for the card
        const card = document.createElement('div');
        card.classList.add('card'); // Add 'card' class for styling
        card.id = `robot-${id}`; // Assign a unique ID to each card

        const robotImage = document.createElement('img');
        robotImage.src = image; // Use the image URL provided in the robot object
        robotImage.alt = `Robot ${name}`;

        const robotName = document.createElement('h2');
        robotName.textContent = name; // Display robot name

        const robotEmail = document.createElement('p');
        robotEmail.textContent = email; // Display robot email

        // Append elements to the card
        card.appendChild(robotImage);
        card.appendChild(robotName);
        card.appendChild(robotEmail);

        // Append the card to the card list container
        cardList.appendChild(card);
    });
}

// Function to handle search input and filter robots
// PART II: The filter - Filters cards based on search box input
function handleSearch(event) {
    const searchTerm = event.target.value.toLowerCase(); // Get search term, convert to lowercase for case-insensitivity

    // Filter the 'robots' array
    const filteredRobots = robots.filter(robot => {
        // Check if robot's name (converted to lowercase) includes the search term
        return robot.name.toLowerCase().includes(searchTerm);
    });

    // Display the filtered robots
    displayRobots(filteredRobots);
}

// Add event listener to the search input
// An 'input' event fires whenever the value of an <input> or <textarea> element has been changed.
searchInput.addEventListener('input', handleSearch);

// Initial display of all robots when the page loads
displayRobots(robots);