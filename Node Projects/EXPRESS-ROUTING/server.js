const express = require('express')
var app = express()

const userroute = require('./routes/users')
const productsroute = require('./routes/products')

app.use('/user', userroute);
app.use('/product', productsroute);

app.listen(5000, () => {
    console.log('Server started on port 5000');
});