const inventory = [
  { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
  { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
  { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
  { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
  { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
];

function getCarHonda(carInventory) {

  const hondaCar = carInventory.find(car => car.car_make === "Honda");

  if (hondaCar) {
    const { car_make, car_model, car_year } = hondaCar;
    return `This is a ${car_make} ${car_model} from ${car_year}.`;
  } else {
    return "No Honda car found in the inventory.";
  }
}


console.log(getCarHonda(inventory)); 

// ------------------------------------------------------------------

const inventoryPart2 = [ 
  { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
  { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
  { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
  { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
  { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
];

function sortCarInventoryByYear(carInventory) {

  const sortedInventory = [...carInventory].sort((carA, carB) => {
    return carA.car_year - carB.car_year; 
  });

  return sortedInventory;
}


const sortedCars = sortCarInventoryByYear(inventoryPart2);
console.log(sortedCars);
