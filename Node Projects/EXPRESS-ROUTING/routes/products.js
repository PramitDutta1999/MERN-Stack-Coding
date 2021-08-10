const { response } = require('express');
const express = require('express');
const router = express.Router()

router.get('/getproduct', (req, res) => {
    var products = ['iphone x', 'one plus t', 'samsung note 5']
    res.send(products);
});

router.get('/addproduct', (req, res) => {
    res.send('This is about adding product');
});

module.exports = router