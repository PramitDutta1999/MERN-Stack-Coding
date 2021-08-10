const express = require('express');
var app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/sports', { useNewUrlParser: true, useUnifiedTopology: true }, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('Mongodb connection successful');
    }
});

const GameModel = mongoose.model('games', { name: String, country: String, player: String })

app.post('/addgame', (req, res) => {
    var name = req.body.name
    var country = req.body.country
    var player = req.body.player

    var newgame = new GameModel({ name: name, country: country, player: player })
    newgame.save(function (err) {
        if (err) {
            res.send('Adding game failed');
        }
        else {
            res.send('Game added successfully to database')
        }
    })
});
app.post('/deletegame', (req, res) => {
    GameModel.findOneAndDelete({
        player: req.body.player
    }, function (err) {
        if (err) {
            res.send('Deleting Document Failed')
        } else {
            res.send('Document Deleted Successfully')
        }
    })
});
app.post('/getgames', (req, res) => {
    GameModel.find({}, function (err, documents) {
        if (err) {
            res.send("Something went wrong!");
        }
        else {
            res.send(documents);
        }
    })
});
app.post('/updategames', (req, res) => {
    GameModel.findOneAndUpdate({
        player: req.body.player
    }, { country: 'Chaina' }, function (err) {
        if (err) {
            res.send('Updating Document Failed')
        } else {
            res.send('Document Updated Successfully')
        }
    })
});
app.listen(5000, () => {
    console.log('Server started on port');
})