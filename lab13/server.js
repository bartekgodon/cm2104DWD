
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
 res.send(oneLinerJoke.getRandomJoke());
});

app.get('/add', function(req, res){
  var x = req.query.x;
  var y = req.query.y;
  var z = parseInt(x) + parseInt(y);
 res.send("X + Y=" + z);
});

app.get('/calc', function(req, res){
  var x = req.query.x;
  var y = req.query.y;
  var type = req.query.type;

  if(type == "add"){
    var z = parseInt(x) + parseInt(y);
    res.send("X + Y=" + z);
  }
  if(type == "sub"){
    var z = parseInt(x) - parseInt(y);
    res.send("X - Y=" + z);
  }

});

app.get('/getform', function(req, res){
  var name = req.query.name;
  var quest = req.query.quest;
  res.send("Hi "+name+" I am sure you will "+quest) ;
});

app.listen(8080);
app.use(express.static('public'));
