// importing modules
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

//starting the express app
var app = express();

// connecting to mongodb
var dbConnect = mongoose.connect('mongodb://AdityaP:wordsearch2018@ds011298.mlab.com:11298/wordsearchdb');
mongoose.Promise = global.Promise; 

// importing the router
const routes = require('./Routes/api.js');

//initialize in the middlewares
app.use(bodyParser.json()); 
app.use('/api',routes);
app.use(function(err, req, res, next) {
    res.status(422).send({ error: err.message });
})

//listening to request 
app.listen(4000,function(){
	console.log("Listening at port 4000");
})