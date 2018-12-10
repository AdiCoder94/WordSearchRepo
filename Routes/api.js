//importing the required modules
var express = require('express');
const router = express.Router();

//importing Members model
const SiteMember = require("../Models/members.model");

/*
	This is the SignUp API end point. This API is capable of:-
	1.Getting the email and password from the request body.
	2.Validate both are proper value.
	3.Check with existing user with that email.
	4.Create new user Object and save.
*/
 
//API for posting email and password
router.post('/account/signup',(req, res, next) => {
	const { body } = req;
	const { email, password, username } = body;

    // empty input field scenarios
	if (!email) {
		return res.send({
			success:false,
			message:"Error: Email cannot be blank"
		});
	}
	
	if (!password) {
		return res.send({
			success:false,
			message:"Error: Password cannot be blank"
		});
	} 

	if (!username) {
		return res.send({
			success:false,
			message:"Error: Username cannot be blank"
		});
	}

	// changing the entered email to lowercase and removing the trailing whitespaces
	email = email.toLowerCase();
	email = email.trim();

	// changing the entered username by removing the trailing whitespaces
	username = username.trim();

	/*	steps: 
		1.Verify the user doesn't exist.
		2.Save
	*/
	SiteMember.find(
		{ email: email }, ( err, previousUser ) => {
			if (err){
				return res.send({
					success:false,
					message:"Server error"
				});
			}
			else if (previousUser.length > 0){
				return res.send({
					success:false,
					message:"Account already exists"
				});
			}
		}
	)

	SiteMember.find(
		{ username:username }, ( err, previousUserName ) => {
			if (err){
				return res.send({
					success:false,
					message:"Server error"
				});
			}
			else if (previousUserName.length > 0){
				return res.send({
					success:false,
					message:"Username already exists"
				});
			}
		}
	)
	// saving the new user
	const newMember = new SiteMember();

	// allocating credentials
	newMember.username = username;
	newMember.email = email;
	newMember.password = password.generateHash(password);

	newMember.save((err, user) => {
		if (err){
			return res.send({
				success:false,
				message:"Server error"
			})
		}
		else if (user){
			return res.send({
				success:true,
				message:"New member created"
			})
		}
	});
})

//Sample API 
router.get('/account/getmember', (req, res, next) => {
	res.send({
		message:"This is get request",
	});
	console.log("this is get");
})

module.exports = router; 