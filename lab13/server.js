var express = require('express');
var app = express();
var oneLinerJoke = require("one-liner-joke");

app.get('/', function(req, res){
 res.send("Hello world! by express");
});

app.get('/test', function(req, res){
 res.send("this is route 2");
});

app.get('/joke', function(req, res){
 res.writeHead(200, {'Content-Type': 'text/html'});
 res.send(oneLinerJoke.getRandomJoke());
 res.end(randomJoke.body);
});

app.listen(8080);
