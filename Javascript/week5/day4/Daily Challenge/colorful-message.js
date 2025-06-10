const chalk = require('chalk');

function displayColorfulMessage() {
  const message = chalk.bold.rgb(255, 140, 0)('This is a vibrant orange and bold message!');
  const subMessage = chalk.hex('#1E90FF').underline('Powered by Chalk NPM package!');
  console.log(message);
  console.log(subMessage);
}

module.exports = {
  displayColorfulMessage
};

console.log("colorful-message.js: 'displayColorfulMessage' function defined and exported.");