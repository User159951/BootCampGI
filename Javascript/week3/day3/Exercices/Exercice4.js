function hotelCost() {
    let nights;
    const pricePerNight = 140;

    
    while (true) {
        nights = prompt("How many nights would you like to stay in the hotel?");
        nights = Number(nights);

        if (!isNaN(nights) && nights > 0) {
            break;
        }
        alert("Please enter a valid number of nights.");
    }

    return nights * pricePerNight;
}


let totalHotelCost = hotelCost();
console.log("Hotel total cost: $" + totalHotelCost);


function planeRideCost() {
    let destination;

    while (true) {
        destination = prompt("What is your destination?");
        if (destination && isNaN(destination)) {
            break;
        }
        alert("Please enter a valid destination.");
    }

    destination = destination.trim().toLowerCase();

    if (destination === "london") {
        return 183;
    } else if (destination === "paris") {
        return 220;
    } else {
        return 300;
    }
}


let totalPlaneCost = planeRideCost();
console.log("Plane ticket cost: $" + totalPlaneCost);


function rentalCarCost() {
    let days;


    while (true) {
        days = prompt("How many days would you like to rent the car?");
        days = Number(days);
        if (!isNaN(days) && days > 0) {
            break;
        }
        alert("Please enter a valid number of days.");
    }

    const dailyRate = 40;
    let totalCost = days * dailyRate;

    // Apply 5% discount for more than 10 days
    if (days > 10) {
        totalCost *= 0.95;
    }

    return totalCost;
}


let totalRentalCost = rentalCarCost();
console.log("Rental car cost: $" + totalRentalCost);

finale
function totalVacationCost(nights, destination, days) {
    const hotel = hotelCost(nights);
    const plane = planeRideCost(destination);
    const car = rentalCarCost(days);
    const total = hotel + plane + car;

    console.log(`The hotel cost: $${hotel}`);
    console.log(`The plane tickets cost: $${plane}`);
    console.log(`The car rental cost: $${car}`);
    console.log(`Total vacation cost: $${total}`);
}