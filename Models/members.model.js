const mongoose = require ('mongoose');
const bcrypt = require ('bcrypt');

// creating schema for the member
const memberSchema = new mongoose.Schema(
	{email : { type : String, default : "" }},
	{password : { type : String, default : "" }},
	{isDeleted : { type : Boolean, default : "" }},
	{signUpDate : { type : Date, default : Date.now() }}
)

//Schema method for hashing password
memberSchema.methods.generateHash = function(password){
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

//Schema method for comparing password
memberSchema.methods.validPassword = function(password){
	return bcrypt.compareSync(password, this.password);
};

//compiling the member schema to model and exporting
module.exports = mongoose.model("Members",memberSchema);