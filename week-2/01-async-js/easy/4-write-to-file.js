const fs = require('fs');

// Function to write new content to a file
function writeToFile(filePath, newContent) {
  fs.writeFile(filePath, newContent, 'utf8', (err) => {
    if (err) {
      console.error(`Error writing to file: ${err.message}`);
      return;
    }

    console.log('File updated successfully');
  });
}

// Replace 'path/to/your/file.txt' with the actual file path
const filePath = '../../02-nodejs/files/a.txt';

// New content to be written to the file
const newContent = 'This is the new content of the file.\n';

// Write to the file
writeToFile(filePath, newContent);