const fs = require('fs').promises; 

const directoryPath = './'; 

async function readDirectory() {
  console.log(`\nListing files in directory: '${directoryPath}'`);
  try {
    const files = await fs.readdir(directoryPath);
    
    if (files.length === 0) {
      console.log('The directory is empty.');
      return;
    }
    
    console.log('Files found:');
    files.forEach(file => {
      console.log(`- ${file}`);
    });
  } catch (error) {
    console.error(`Error reading directory:`, error.message);
  }
}

readDirectory();