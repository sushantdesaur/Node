const express = require('express');
const path = require('path');

const app = express();


// Load staticfiles
app.use(express.static('./public'))



app.get('/', (req,res)=> {
    res.sendFile(path.resolve(__dirname, './navbar-app/index.html')); // We can use path.join also 
})


app.all('*', (res,req)=>{
    res.status(404).send("<h1>Home Pagec</h1>");
})
app.listen(5000, ()=>{
    console.log('The server is listening at port 5000');
})