// Exercise 2 :

let guestList = {
  randy: "Germany",
  karla: "France",
  wendy: "Japan",
  norman: "England",
  sam: "Argentina"
}

let name = prompt("What is your name?").toLowerCase();

if (name in guestList) {


  console.log(`Hi! I'm ${name}, and I'm from ${guestList[name]}`);
}   else {


  console.log(`Hi! I'm a guest`);
}