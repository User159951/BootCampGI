const chalk = require('chalk');

console.log(chalk.blue('Hello world! This is a blue message.'));
console.log(chalk.red.bold('Attention! This message is red and bold.'));
console.log(chalk.green.italic('Success! And it looks great in green italics.'));
console.log(chalk.bgYellow.black('Black text on a yellow background.'));
console.log(chalk.hex('#FF4500').underline('Orange Red and underlined.'));
console.log(chalk.rgb(123, 45, 67).inverse('Inverted colors using RGB.'));

console.log(chalk.magenta.strikethrough('This text is struck through and magenta.'));

