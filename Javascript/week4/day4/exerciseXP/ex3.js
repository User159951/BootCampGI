const marioGame = {
  detail : "An amazing game!",
  characters : {
      mario : {
        description:"Small and jumpy. Likes princesses.",
        height: 10,
        weight: 3,
        speed: 12,
      },
      bowser : {
        description: "Big and green, Hates princesses.",
        height: 16,
        weight: 6,
        speed: 4,
      },
      princessPeach : {
        description: "Beautiful princess.",
        height: 12,
        weight: 2,
        speed: 2,
      }
  },
};


const marioGameJSON = JSON.stringify(marioGame);
console.log(marioGameJSON);
// They are also converted into JSON objects (key-value pairs) within the overall JSON string.
// Their structure and properties are preserved, just represented as a string.


const marioGamePrettyJSON = JSON.stringify(marioGame, null, 2); 
console.log(marioGamePrettyJSON);