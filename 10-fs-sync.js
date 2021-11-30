// Invoke whole Module 
const fs = require('fs');

// Invoke functions from the modules 
const {readFileSync, writeFileSync} = require('fs');

// Read from Text File
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

console.log(first, second);

// Write a file
writeFileSync(
    './content/result-sync.txt', 
    `Here is the result: ${first}, ${second}`,
    { flag: 'a'} // Append the file or add to the file
);