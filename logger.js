var url = 'https:/mylogger.io/log';

function log(message) {
    //Send an HTTP request
    console.log(message);
}

//Exporting the log function in this module
module.exports.log = log;

//Exporting the url variable in this module
// module.exports.url = url; 