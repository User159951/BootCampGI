const navBar = document.getElementById("navBar");
navBar.classList.remove("navBar");
navBar.classList.add("socialNetworkNavigation");



const li = document.createElement("li");


const textNode = document.createTextNode("Logout");
li.appendChild(textNode);

const ul = document.querySelector("ul");
ul.appendChild(li);


const firstLi = ul.firstElementChild;
const lastLi = ul.lastElementChild;


console.log(firstLi.textContent);
console.log(lastLi.textContent);