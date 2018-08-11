const express = require('express');//express is a framework for node.js web application
const app = express(); //this is an instance of the express class
const port = process.env.PORT || 3000; //connection port to be used
var path = require('path');
app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(port);

console.log('App listening to server request on port '+port);
