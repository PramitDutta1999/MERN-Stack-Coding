const express = require('express')
const cors = require('cors')

const app = express()
const bodyParser = require("body-parser")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: 'true' }))

var messages = ['Hii', 'Hello', 'How are you!']

app.use(cors())

app.get("/", (req, res) => {
    res.send('Hello World')
})

app.get("/api", (req, res) => {
    res.send({ message: 'Hello World, This is MERN App with Redux' })
})

app.get("/api/messages", (req, res) => {

    res.send(messages)
})

app.post("/api/addnewmessage", (req, res) => {
    messages.push(req.body.message)
    res.send(messages)
})

const port = process.env.port || 5000;

app.listen(port, () => {
    console.log('Node JS server started successfully');
});