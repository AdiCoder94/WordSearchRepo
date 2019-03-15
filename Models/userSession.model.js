const mongoose = require('mongoose');

// creating schema for the member
const userSessionSchema = new mongoose.Schema({
	userID: {
		type: Number,
		default: -1
	},
	timeStamp: {
		type: Date,
		default: Date.now()
	},
	isDeleted: {
		type: Boolean,
		default: false
	}
})

//compiling the member schema to model and exporting
const UserSession = mongoose.model("UserSession", userSessionSchema);
module.exports = UserSession;