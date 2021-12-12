'use strict';

const http = require('http');

// req handles incoming request
// res handles outgoing response

const server = http.createServer((res,req)=>{
    if (req.url === '/') {
        res.end('Welcome to the node server home page');  
    }
    if (req.url === '/about') {
        res.end('Welcome to the about page');
    }
    else {
        res.end(`<h1>404 Page not found</h1>`);
    }
});


server.listen(5000);

/*
const server = http.createServer( (req,res) => {
    console.log(req)
    res.write('Welcome to the node server');
    res.end();
});
*/
// Setting the port from which the server is going to listen from. 

