// importing modules
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var port = process.env.PORT || 4000;

//starting the express app
var app = express();

// connecting to mongodb
var dbConnect = mongoose.connect('mongodb://AdityaP:wordsearch2018@ds011298.mlab.com:11298/wordsearchdb');
mongoose.Promise = global.Promise; 
var connection = mongoose.connection;
connection.on('connected', function(){
	console.log('connected to database');
});

// importing the router
const routes = require('./Routes/api.js');

//initialize in the middlewares
app.use(bodyParser.json()); 
app.use('/api', routes);
app.use(function(err, req, res, next) {
    res.status(422).send({ error: err.message })
})

//listening to request 
app.listen(4000,function(){
	console.log("Listening to port: " + port);
})