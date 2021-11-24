// Events Module
// Emit means making a noise and produce something. Here emit produces a signal.

// Setting Event Emitter class 
const EventEmitter = require('events');

// Importing Logger class from logger.js 
const Logger = require('./logger');

// Creating a logger object 
const logger = new Logger();

/*
// Setting Emitter Module
const emitter = new EventEmitter();
*/

// A listener is a function that will be called when an event is raised.
// Register a listener. {on()} and {addlistener()} methods are exactly the same.

// on method
logger.on('messageLogged', (arg) => {
    console.log('Listener Called with on method', arg);
});

/*
// addlistener method
emitter.addListener('messageLogged', function() {
    console.log('Listener Called with addListener method');
});
*/

logger.log('message');



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