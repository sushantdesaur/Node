const express = require('express');

const app = express();

// app.get

app.get('/', (req, res) => {
    res.status(200).send('Home Page');
})

app.get('/about', (req,res) => {
    res.status(200).send('About Page')
});

// app.all {All has all the methods get, update, delete, put etc.}

app.all('*', (req,res) => {
    res.status(404).send("<h1>Resource not found</h1>")
})

// app.listen
app.listen(5000, ()=> {
    console.log('User hit the resource')
    console.log('Server is listening at port 5000')
})


// app.post
// app.put
// app.delete
// app.use

