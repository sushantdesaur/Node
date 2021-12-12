const express = require('express');
const app = express();

// req => middleware => res

// req, res and next are passed automatically by express in logger function.
// Parameters are passed only for demo. 

const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time);
    next(); // Next is passed so that it load next line of code in another function
}

/* 
The next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next.

Middleware functions can perform the following tasks:

    * Execute any code.
    * Make changes to the request and the response objects.
    * End the request-response cycle.
    * Call the next middleware function in the stack.
*/

app.get('/', logger,(req,res)=>{
    res.send('Home Page');
})

app.get('/about', logger, (req,res) => {
    res.send('About Page');
})

app.listen(5000, () => {
    console.log('Server is listening at port 5000')
})