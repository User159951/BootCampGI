// Retrieve the form
const form = document.querySelector("form");
console.log("Form:", form);


const firstNameInput = document.getElementById("fname");
const lastNameInput = document.getElementById("lname");
console.log("By ID:", firstNameInput, lastNameInput);

// Retrieve inputs by name
const firstNameByName = document.getElementsByName("firstname")[0];
const lastNameByName = document.getElementsByName("lastname")[0];
console.log("By Name:", firstNameByName, lastNameByName);

// Handle form submit
form.addEventListener("submit", function (event) {
  event.preventDefault(); 

  const firstName = firstNameInput.value.trim();
  const lastName = lastNameInput.value.trim();

  // Make sure inputs are not empty
  if (firstName === "" || lastName === "") {
    alert("Please fill out both fields.");
    return;
  }

  // Create and append <li> for each value
  const ul = document.querySelector(".usersAnswer");


  const li1 = document.createElement("li");
  li1.textContent = firstName;
  ul.appendChild(li1);

  const li2 = document.createElement("li");
  li2.textContent = lastName;
  ul.appendChild(li2);
});
