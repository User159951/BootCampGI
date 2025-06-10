
const fileManager = require('./fileManager'); 

const helloWorldPath = './Hello World.txt';
const byeWorldPath = './Bye World.txt';
const newContent = 'chi haja jdida';

fileManager.readFile(helloWorldPath, (err, data) => {
  if (err) {
    console.error(`Failed to read "${helloWorldPath}"`);
  } else {
    console.log(`\nContent of "${helloWorldPath}":`);
    console.log(data);
  }

  fileManager.writeFile(byeWorldPath, newContent, (err) => {
    if (err) {
      console.error(`Failed to write to "${byeWorldPath}"`);
    } else {
      console.log(`\nSuccessfully wrote "${newContent}" to "${byeWorldPath}"`);
    }
  });
});