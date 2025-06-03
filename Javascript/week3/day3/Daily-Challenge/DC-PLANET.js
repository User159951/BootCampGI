const planets = [
  { name: "Mercury", moons: 0, color: "gray" },
  { name: "Venus", moons: 0, color: "orange" },
  { name: "Earth", moons: 1, color: "blue" },
  { name: "Mars", moons: 2, color: "red" },
  { name: "Jupiter", moons: 79, color: "brown" },
  { name: "Saturn", moons: 82, color: "goldenrod" },
  { name: "Uranus", moons: 27, color: "lightblue" },
  { name: "Neptune", moons: 14, color: "darkblue" }
];

const section = document.querySelector(".listPlanets")

planets.forEach(planet => {
  const planetDiv = document.createElement("div");
  planetDiv.classList.add("planet");
  planetDiv.style.backgroundColor = planet.color;
  planetDiv.textContent = planet.name;

   for (let i = 0; i < planet.moons; i++) {
    const moon = document.createElement("div");
    moon.classList.add("moon");


    moon.style.top = `${Math.random() * 80}px`;
    moon.style.left = `${Math.random() * 80}px`;

    planetDiv.appendChild(moon);
  }

  section.appendChild(planetDiv);
});