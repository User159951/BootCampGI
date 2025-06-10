const morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`;

const morseOutputDiv = document.getElementById('morseOutput');

function toJs() {
    return new Promise((resolve, reject) => {
        try {
            const morseJS = JSON.parse(morse);
          
            if (Object.keys(morseJS).length === 0) {
                reject("Error: The Morse JavaScript object is empty.");
            } else {
                resolve(morseJS);
            }
        } catch (e) {
            
            reject("Error: Invalid JSON string provided.");
        }
    });
}


function toMorse(morseJS) {
    return new Promise((resolve, reject) => {
        const userInput = prompt("Please enter a word or a sentence:");

        if (userInput === null || userInput.trim() === "") { 
            reject("Error: No word or sentence entered.");
            return;
        }

        const characters = userInput.toLowerCase().split(''); 

        const morseTranslation = [];
        for (const char of characters) {
            if (morseJS.hasOwnProperty(char)) { 
                morseTranslation.push(morseJS[char]);
            } else {
                
                reject(`Error: The character "${char}" does not exist in the Morse alphabet.`);
                return; 
            }
        }
        resolve(morseTranslation);
    });
}


function joinWords(morseTranslation) {
   
    const outputString = morseTranslation.join('\n');
    morseOutputDiv.textContent = outputString; 
}


morseOutputDiv.textContent = "Loading translator..."; 

toJs()
    .then(morseJS => toMorse(morseJS)) 
    .then(morseTranslation => joinWords(morseTranslation)) 
    .catch(error => {
        
        console.error(error);
        morseOutputDiv.textContent = error;
        morseOutputDiv.classList.add('error-message'); 
    });