const express = require('express');
const router = express.Router()

router.get('/login', (req, res) => {
    res.send('This is about the users login');
});

router.get('/register', (req, res) => {
    res.send('This is about users registration');
});

router.get('/forgotpassword', (req, res) => {
    res.send('This is about users forgot password');
});

module.exports = router