var express = require('express');
var app = express();
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var User = require('./dev/Models/UserModel');

var uri = 'mongodb://admin:aragmattr2017@ds157500.mlab.com:57500/aragmattrbase';
var options = { useMongoClient: true};

mongoose.Promise = global.Promise;
mongoose.connect(uri, options);
var db = mongoose.connection;

var kostas = new User({username: 'Kostas', password: '1234'});
console.log(kostas);
db.on('error', console.error.bind(console, 'connection error:'));
db.on('open', function(){
  console.log('CONNECTED');
})


app.use(express.static('dev'));
app.use(bodyParser.json());
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/', function(req, res){
  console.log('username', req.body.username);
  var newUser = new User({username: req.body.username, password: req.body.password});
  newUser.save(function(err, newUser){
    if (err) return console.error(err);
    newUser.speak();
  })
  res.send(req.body);
})

app.get('/output/bundle.js', function(req, res){
  res.sendFile(path.join(__dirname + '/output/bundle.js'));
});

app.listen(3000, function(){
  console.log('listening to port:3000');
});
