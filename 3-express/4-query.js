const express = require('express');

const app = express();
const { products } = require('./data')

app.get('/', (req,res) => {
    res.send('<h1>Home Page</h1><a href="/api/products">Products</a>')
})

app.get('/api/products/', (req,res) => {
    const newProducts = products.map((product) => {
        const {name, price, company, rating} = product;
        return {name, price, company, rating}
    })
    res.json(newProducts)
})

app.listen(5000, ()=>{
    console.log('Server is listening at port 5000')
})