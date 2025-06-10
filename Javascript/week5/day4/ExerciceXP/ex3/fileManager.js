const fs = require('fs'); 

function readFile(filePath, callback) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(`Error reading file ${filePath}:`, err);
      return callback(err, null);
    }
    callback(null, data);
  });
}


function writeFile(filePath, content, callback) {
  fs.writeFile(filePath, content, 'utf8', (err) => {
    if (err) {
      console.error(`Error writing to file ${filePath}:`, err);
      return callback(err);
    }
    callback(null);
  });
}


module.exports = {
  readFile,
  writeFile
};