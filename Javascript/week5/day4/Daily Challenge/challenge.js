const greetingModule = require('./greeting');
const colorfulMessageModule = require('./colorful-message');
const fileReaderModule = require('./read-file');

const userName = "hamza";
const greeting = greetingModule.greet(userName);
console.log(greeting);

colorfulMessageModule.displayColorfulMessage();

fileReaderModule.readAndDisplayFileContent();
