// Exercise 4 :

const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

console.log((`The number of floors in the building is ${building.numberOfFloors}`));


console.log((`The number of appartments in 1st floor is ${building.numberOfAptByFloor.firstFloor} \
and in 3rd floor is ${building.numberOfAptByFloor.thirdFloor}.`));


console.log(`The Name of the second tenant is : ${building.nameOfTenants[1]}, And he has \
${building.numberOfRoomsAndRent.dan[0]} rooms in his apartment.`);


if ((building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[1]) > building.numberOfRoomsAndRent.dan[1]) {
    building.numberOfRoomsAndRent.dan[1] = 1200;
    console.log(`Dan's rent has been increased to ${building.numberOfRoomsAndRent.dan[1]}.`);
}