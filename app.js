/*
//File System Module


const fs = require('fs');

const files = fs.readdirSync('./');
console.log(files);

// Does same thing above but with error handling
fs.readdir('./', function(err, files) {
    if (err) console.log('Error', err);
    else console.log('Result', files);
});
*/

/*
// Path Module

const path = require('path');

var pathObj = path.parse(__filename);

const os = require('os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

// console.log(pathObj, totalMemory, freeMemory);


console.log(`Total Memory: ${totalMemory}`)
console.log(`Free Memory: ${freeMemory}`)
*/

/*
// Call logger module
const logger = require('./logger');

// Pass an arugument through log fuction
logger.log('message');
*/


/*

function sayHello(name) {
    console.log("Hello \t" + name);
}

sayHello("Sushant");

console.log(module);

*/