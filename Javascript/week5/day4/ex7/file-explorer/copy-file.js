// file-explorer/copy-file.js
const fs = require('fs').promises; // Use the promise-based version of fs

const sourcePath = './source.txt';
const destinationPath = './destination.txt';

async function copyFile() {
  console.log(`Attempting to copy from '${sourcePath}' to '${destinationPath}'...`);
  try {
    const content = await fs.readFile(sourcePath, 'utf8');
    await fs.writeFile(destinationPath, content, 'utf8');
    
    console.log(`Successfully copied content from '${sourcePath}' to '${destinationPath}'.`);
  } catch (error) {
    console.error(`Error during file copy:`, error.message);
  }
}

copyFile();