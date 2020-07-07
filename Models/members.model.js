const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// creating schema for the member
const memberSchema = new mongoose.Schema({
	username: {
		type: String,
		reqiured: true,
		default: ''	},
	email: {
		type: String,
		required: true,
		default: ''	},
	password: {
		type: String,
		required: true,
		default: ''	},
	isDeleted: {
		type: Boolean	},
	signUpDate: {
		type: Date }}
)

//Document middleware for hashing
memberSchema.methods.generateHash = function (password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}


//Schema method for comparing password
memberSchema.methods.validPassword = function (password) {
	bcrypt.compare(password, this.password, (err, res) => {
		if (err) return err;
		else {
			return res;}});
}

//compiling the member schema to model and exporting
const SiteMember = mongoose.model("Member", memberSchema);
module.exports = SiteMember;