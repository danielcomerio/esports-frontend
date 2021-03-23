var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname)));
console.log(path.join(__dirname + 'pages/home.html'));


const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'text/html' })
    fs.createReadStream('pages/home.html').pipe(res)
})

server.listen(process.env.PORT || 3000)
