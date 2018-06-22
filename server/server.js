// server.js
// localhost:8080

const http = require('http');
http.createServer((req, res) => {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end("Print HelloWorld of JS!");
    }).listen(8080);
