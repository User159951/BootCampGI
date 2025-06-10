async function getStarshipData() {
    try {
        
        const response = await fetch("https://www.swapi.tech/api/starships/9/");
        if (!response.ok) {
          
            throw new Error(`HTTP error! status: ${response.status} - ${response.statusText}`);
        }
        const objectStarWars = await response.json();
        console.log("Starship Data (result object):", objectStarWars.result);

    } catch (error) {

        console.error("An error occurred while fetching starship data:", error);
    }
}

getStarshipData();

