
const myForm = document.getElementById('myForm');
const outputDiv = document.getElementById('output');


myForm.addEventListener('submit', function(event) {

    event.preventDefault();

    const nameInput = document.getElementById('name');
    const lastNameInput = document.getElementById('lastName');

    const name = nameInput.value;
    const lastName = lastNameInput.value;

    const formData = {
        name: name,
        lastName: lastName
    };


    const jsonString = JSON.stringify(formData, null, 2);

   
    outputDiv.textContent = jsonString; 

    nameInput.value = '';
    lastNameInput.value = '';
});