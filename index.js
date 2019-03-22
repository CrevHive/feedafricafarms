const express = require('express');//express is a framework for node.js web application
const app = express(); //this is an instance of the express class
const port = process.env.PORT || 8080; //connection port to be used
const path = require('path');

app.use(express.static(path.join(__dirname + '/public')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.get('/about', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/about.html'));
});

app.get('/service', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/service.html'));
});

app.get('/contact', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/contact.html'));
});

app.listen(port);

console.log('App listening to server request on port '+port);
