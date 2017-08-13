var express = require('express');
var app = express();
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var validator = require('validator');
var User = require('./dev/Models/UserModel');
var isEmpty = require('lodash/isEmpty');

var uri = 'mongodb://admin:aragmattr2017@ds157500.mlab.com:57500/aragmattrbase';
var options = { useMongoClient: true};

mongoose.Promise = global.Promise;
mongoose.connect(uri, options);
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.on('open', function(){
  console.log('CONNECTED');
})


app.use(express.static('dev'));

app.use(bodyParser.json());
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname + '/index.html'));
});

function validateInput(data) {
  var errors = {};

  if (validator.isEmpty(data.username)) {
    errors.username = 'Field is required';
  }

  if (validator.isEmpty(data.password)) {
    errors.password = 'Field is required';
  }

  if (validator.isEmpty(data.confPwd)) {
    errors.confPwd = 'Field is required';
  }

  if(!validator.equals(data.password, data.confPwd)) {
    errors.pwdDontMatch = "Passwords don't match";
  }

  return {
    errors: errors,
    isValid: isEmpty(errors)
  }
}

app.post('/register', function(req, res){
  const input = validateInput(req.body);
  const errors = input.errors;
  const isValid = input.isValid;

  if(isValid) {
    var newUser = new User({username: req.body.username, password: req.body.password});
    newUser.save()
      .then(function(user) {
        user.speak();
        res.json({success: true })
      })
      .catch(function(err){
        res.status(500).json({error: err})
      })
  } else {
    res.status(400).json(errors);
  }
})

app.post('/login', function(req, res){
  console.log('login:', req.body.username, req.body.password);
  User.authenticate(req.body.username, req.body.password, function(err, token){
    if (err) {
      console.log('error on login', err);
      res.status(401).json({errors: {form: err.message}});
    }

    //redirect to page
    console.log('user found:', token);
    res.json({token});
  })
})

app.get('/output/bundle.js', function(req, res){
  res.sendFile(path.join(__dirname + '/output/bundle.js'));
});

app.listen(3000, function(){
  console.log('listening to port:3000');
});
