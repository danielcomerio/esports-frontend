var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname + '/')));

app.listen(process.env.PORT || 3000);
