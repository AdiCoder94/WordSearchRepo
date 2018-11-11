//Module imports
var express = require('express');
var mongoose = require('mongoose');

//constants
const portNumber = 3003;

//starting the express module
var app = express();

//connecting to mongo database
mongoose.connect('mongodb://localhost/test');

//to check the connection
var dbconnect = mongoose.connection;
dbconnect.on('error', console.error.bind(console, 'connection error'));
dbconnect.once('open', function(){

})

//defining kitty schema
var kittySchema = new mongoose.Schema(
	{name:String}
);

// assigning a function to kitty Schema
kittySchema.methods.speak = function(){
	var greeting = this.name ? "My name is " + this.name : "I got no name, bruh!!";
	console.log(greeting);
}
kittySchema.methods.saved = function(){
	var saveMsg = this.name +" has been saved in the database.";
	console.log(saveMsg);
}

//compiling kitty schema into model
var Kitten = mongoose.model("Kitten",kittySchema);

// creating document in the Kitten model
var Silence = new Kitten(
	{name:"Silence"} 
);
var noName = new Kitten(
	{name:"Fuck you"}
)


// setting port for the server
app.listen(portNumber,(portNumber)=>{
	console.log(`starting server at port ${portNumber} !`)
})