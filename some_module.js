// Invoke HTTP module 
const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to the home page.')
    }
    if (req.url === '/about') {
        res.end('Welcome to the about page.')
    }
    else {
        res.end(`
        <h1>Oops</h1>
        <p>We can't seem to find the page you are looking for</p>
        `)
    }
});

/*
const server = http.createServer((req, res) => {
    res.write('Welcome to our home page');
    res.end()
});
*/

server.listen(5000);
 