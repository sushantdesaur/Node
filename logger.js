// Setting Event Emitter class 
const EventEmitter = require('events'); 

var url = 'https:/mylogger.io/log';

class Logger extends EventEmitter {
    log(message) {
        //Send an HTTP request
        console.log(message);
        // Raise an event
        this.emit('messageLogged', {id: 1, url: 'http://'});
    }
};


//Exporting the log function in this module
module.exports = Logger;

//Exporting the url variable in this module
// module.exports.url = url; 