var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('public'));

app.get('/', function(req, res){
  console.log('Hello');
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/output/bundle.js', function(req, res){
  res.sendFile(path.join(__dirname + '/output/bundle.js'));
});

app.listen(3000, function(){
  console.log('listening to port:3000');
});
