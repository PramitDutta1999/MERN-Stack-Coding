const http = require('http')
const dbinfo = require('./dbinfo')
http.createServer(function (req, res) {
    if (req.url === '/') {
        res.end('The database port is ' + dbinfo.port)
    }
    if (req.url == '/products') {
        res.end('The database password is: ' + dbinfo.password)
    }
}).listen(5000)