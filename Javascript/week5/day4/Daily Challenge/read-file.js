const fs = require('fs').promises; 
const path = require('path');     

async function readAndDisplayFileContent() {
  const filePath = path.join(__dirname, 'files', 'file-data.txt');

  console.log(`\n--- Reading content from '${filePath}' ---`);
  try {
    const content = await fs.readFile(filePath, 'utf8');
    console.log(content);
  } catch (error) {
    console.error(`Error reading file: ${error.message}`);
    if (error.code === 'ENOENT') {
      console.error("Please make sure 'files/file-data.txt' exists in the 'daily-challenge' directory.");
    }
  }
}

module.exports = {
  readAndDisplayFileContent
};

