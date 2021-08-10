const http = require('http')
http.createServer(function (req, res) {
    res.end('This is npm first module with nodemon')
}).listen(4000)