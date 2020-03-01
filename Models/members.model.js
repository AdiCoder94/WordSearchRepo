const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// creating schema for the member
const memberSchema = new mongoose.Schema({
	username: {
		type: String,
		reqiured: true,
		default: ''
	},
	email: {
		type: String,
		required: true,
		default: ''
	},
	password: {
		type: String,
		required: true,
		default: ''
	},
	isDeleted: {
		type: Boolean
	},
	signUpDate: {
		type: Date
	}
})

//Document middleware for hashing
memberSchema.pre('save', function (next) {
	var member = this;

	// only hash password if it's new or modified
	if (!member.isModified('password')) {
		return next();}

	//generate salt
	bcrypt.genSalt(8, (err, salt) => {
		if (err) {
			return next(err);
		}
		//hashing password using new salt
		bcrypt.hash(member.password, salt, (err, hash) => {
			if (err) {
			return next(err);}
			//overwrite the new password over the old one
			member.password = hash;
			next();
		})
	})
})

//Schema method for comparing password
memberSchema.methods.validPassword = function (password) {
	bcrypt.compare(password, this.password, (err, res) => {
		if (err) return err;
		else {
			console.log("this is the comparision in the database " + res);
			return res;
		}
	});
};

//compiling the member schema to model and exporting
const SiteMember = mongoose.model("Member", memberSchema);
module.exports = SiteMember;