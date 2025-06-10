// Retrieve the div and log it
const container = document.getElementById("container");
console.log(container);

// Change “Pete” to “Richard”
const firstUl = document.querySelectorAll("ul")[0];
firstUl.children[1].textContent = "Richard";

// Delete the second <li> of the second <ul>
const secondUl = document.querySelectorAll("ul")[1];
secondUl.removeChild(secondUl.children[1]);

// Change the name of the first <li> of each <ul> to your name
const allUls = document.querySelectorAll("ul");
allUls.forEach(ul => {
  ul.children[0].textContent = "hamza"; 
});

// Add class 'student_list' to both <ul>'s
allUls.forEach(ul => {
  ul.classList.add("student_list");
});

// Add classes 'university' and 'attendance' to the first <ul>
firstUl.classList.add("university", "attendance");

// Style the <div>: light blue background and padding
container.style.backgroundColor = "lightblue";
container.style.padding = "10px";

// Hide the <li> with the text “Dan”
for (let li of secondUl.children) {
  if (li.textContent === "Dan") {
    li.style.display = "none";
  }
}

// Add a border to the <li> containing “Richard”
for (let li of firstUl.children) {
  if (li.textContent === "Richard") {
    li.style.border = "2px solid black";
  }
}

// Change font size of the whole body
document.body.style.fontSize = "18px";

// BONUS: Alert if background is light blue
if (container.style.backgroundColor === "lightblue") {
  const firstUser = firstUl.children[0].textContent;
  const secondUser = firstUl.children[1].textContent;
  alert(`Hello ${firstUser} and ${secondUser}`);
}