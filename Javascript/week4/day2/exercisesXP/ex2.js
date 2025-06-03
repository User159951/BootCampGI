const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th", "st", "nd", "rd"];

colors.forEach((color, index) => {
  const position = index + 1;
  let suffix;

  if (position === 1) {
    suffix = ordinal[1]; 
  } else if (position === 2) {
    suffix = ordinal[2]; 
  } else if (position === 3) {
    suffix = ordinal[3]; 
  } else {
    suffix = ordinal[0]; 
  }

  console.log(`${position}${suffix} choice is ${color}.`);
});
