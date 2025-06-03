// Exercise 4 :

function hotelCost() {
    const numberOfNights = prompt("How many nights will you stay?");
    while (isNaN(numberOfNights)) {
        numberOfNights = prompt("Please enter a valid number of nights:");
    }

    return numberOfNights * 140;
}

function planeRideCost() {
    const destination = prompt("What is your destination?");
    while (destination === "" || typeof destination !== "string") {
        destination = prompt("Please enter a valid destination:");
    }

    switch (destination.toLowerCase()) {
        case "london":
            return 183;
        case "paris":
            return 220;
        default:
            return 300;
    }
}

function rentalCarCost() {
    const numberofDays = prompt("How many days will you rent the car?");
    while (isNaN(numberofDays) || numberofDays <= 0) {
        numberofDays = prompt("Please enter a valid number of days:");
    }

    let totalCost = numberofDays * 40;

    if(numberofDays > 10) {
        totalCost = totalCost - totalCost * 5 / 100;
    }

    return totalCost
}

function totalVacationCost() {
    const hCost = hotelCost();
    const pCost = planeRideCost();
    const rCost = rentalCarCost();

    console.log(`The car cost: $${rCost}, the hotel cost: $${hCost}, the plane tickets cost: $${pCost}`)
    return rCost + pCost + hCost;
}

totalVacationCost()



const hotelCost = (numberOfNights) <= numberOfNights * 140;

const planeRideCost = (destination) => {
    switch (destination()) {
        case "london":
            return 183;
        case "paris":
            return 220;
        default:
            return 300;
    }
}

const rentalCarCost = (numberofDays) => {
    let totalCost = numberofDays * 40;

    if(numberofDays > 10) {
        totalCost = totalCost - totalCost * 5 / 100;
    }

    return totalCost
}

function totalVacationCost() {

    const numberOfNights = prompt("How many nights will you stay?");
    while (isNaN(numberOfNights) || numberOfNights <= 0) {
        numberOfNights = prompt("Please enter a valid number of nights:");
    }

    const destination = prompt("What is your destination?");
    while (destination === "" || typeof destination !== "string") {
        destination = prompt("Please enter a valid destination:");
    }

    const numberofDays = prompt("How many days will you rent the car?");
    while (isNaN(numberofDays) || numberofDays <= 0) {
        numberofDays = prompt("Please enter a valid number of days:");
    }
    
    const hCost = hotelCost(numberOfNights);
    const pCost = planeRideCost(destination);
    const rCost = rentalCarCost(numberofDays);

    console.log(`The car cost: $${rCost}, the hotel cost: $${hCost}, the plane tickets cost: $${pCost}`)
    return rCost + pCost + hCost;
}

totalVacationCost()