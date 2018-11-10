//Module imports
var express = require('express');

//constants
const portNumber = 3003;

//starting the express module
var app = express();

// setting port for the server
app.listen(portNumber,(portNumber)=>{
	console.log(`starting dev server at port ${portNumber} !`)
})