const express = require('express')
const app = express()
app.get('/contactus', function (req, res) {
    res.end('This is contact-us page using express with nodemon server')
})
app.listen(5000, function () {
    console.log('connection successful');
})