const fs = require('fs');
function readandProcess(filename){
    fs.readFile(filename, 'utf8', (err, data) => {
        if (err){
            throw err;
            return;
        }

        console.log(`File Contents : \n ${data} `);

          // Perform an expensive operation (e.g., time-consuming calculation)
    const result = expensiveOperation();
    console.log(`Expensive Operation Result: ${result}`);
  });
}

// Example function representing an expensive operation
function expensiveOperation() {
    // Simulate an expensive operation
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      result += Math.sqrt(i);
    }
    return result;
  }

  
  const filename = '../../02-nodejs/files/a.txt';

  readandProcess(filename);