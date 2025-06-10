// Change the id from navBar to socialNetworkNavigation
const navDiv = document.getElementById("navBar");
navDiv.setAttribute("id", "socialNetworkNavigation");

// Select the <ul> inside the div
const ul = document.querySelector("#socialNetworkNavigation ul");

// Create a new <li>
const newLi = document.createElement("li");

// Create a new text node with "Logout"
const logoutText = document.createTextNode("Logout");

// Append the text to the <li>
newLi.appendChild(logoutText);

// Append the <li> to the <ul>
ul.appendChild(newLi);

// Get the first and last <li> elements
const firstLi = ul.firstElementChild;
const lastLi = ul.lastElementChild;

// Display the text of each link
console.log("First link text:", firstLi.textContent);
console.log("Last link text:", lastLi.textContent);