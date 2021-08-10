const express = require('express')
var app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send('This is homepage api')
});
app.get('/username', (req, res) => {
    var username = ['Pramit', 'Prasun', 'Messi', 'Sakib']
    res.send(username)
});
app.post('/login', (req, res) => {
    var username = req.body.username
    var password = req.body.password
    if (username == 'anik' && password == 'dutta') {
        res.send('Login Successfull')
    } else {
        res.send('Login Failed')
    }
})
app.listen(5000, () => {
    console.log('Server started on port 5000');
})