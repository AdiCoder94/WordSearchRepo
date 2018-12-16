//importing the required modules
var express = require('express');
const router = express.Router();

//importing Members model
const SiteMember = require("../Models/members.model");
const EnteredWord = require("../Models/word.model");

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
	var { email, password, username } = body;

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
	var newMember = new SiteMember();

	// allocating credentials
	newMember.username = username;
	newMember.email = email;
	newMember.password = newMember.generateHash(password);

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

// API for sign in
router.post('/account/signin',(req, res, next) => {
	var { body } = req;
	var { username, password } = body;

	if (!username) {
      return res.send({
        success: false,
        message: 'Error: Email cannot be blank.'
      });
    }
    if (!password) {
      return res.send({
        success: false,
        message: 'Error: Password cannot be blank.'
      });
    }

    SiteMember.find(
    	{ username:username }, (err, user) => {
	    	if(err){
	    		return res.send({
	    			success:false,
	    			error:"Error:Server error"
	    		});
	    	}	
	    	else if(user.length != 1){
	    		return res.send({
	    			success:false,
	    			error:"Error:Invalid"
	    		});
	    	}
    	}	   
	)
})

//API for entering word
router.post('/member/enterword', (req, res, next) => {
	var { body } = req;
	var { enteredWord, partOfSpeech, partOfSpeechSubCategory, connotation, root, languageOfOrigin, meaning } = body;

	if(!partOfSpeech){
		return res.send({
			message:"You need to enter part of speech",
			success:false
		})
	}
	else if(!enteredWord){
		return res.send({
			message:"No word entered",
			success:false
		})
	}
	else if(!partOfSpeechSubCategory){
		return res.send({
			message:"You need to enter subcategory",
			success:false
		})
	}
	else if(!connotation){
		return res.send({
			message:"You need to enter connotation of the word",
			success:false
		})
	}
	else if(!root){
		return res.send({
			message:"You need to enter root",
			success:false
		})
	}
	else if(!languageOfOrigin){
		return res.send({
			message:"You need to enter language of origin",
			success:false
		})
	}
	else if(!meaning){
		return res.send({
			message:"You need to enter meaning",
			success:false
		})
	}

	enteredWord = enteredWord.toLowerCase();
	enteredWord = enteredWord.trim();

	/*	steps: 
		1.Verify the word doesn't exist.
		2.Save
	*/
	EnteredWord.find(
		{ enteredWord: enteredWord }, ( err, existingWord ) => {
			if (err){
				return res.send({
					success:false,
					message:"Server error"
				});
			}
			else if (existingWord.length > 0){
				return res.send({
					success:false,
					message:"Word already exists in the database"
				});
			}
		}
	)

	// Saving the new word
	var newWord = new EnteredWord();

	// allocating object variables
	newWord.enteredWord = enteredWord; 
	newWord.partOfSpeech = partOfSpeech; 
	newWord.partOfSpeechSubCategory = partOfSpeechSubCategory; 
	newWord.connotation = connotation; 
	newWord.root = root; 
	newWord.languageOfOrigin = languageOfOrigin; 
	newWord.meaning = meaning; 

	newWord.save((err, word) => {
		if (err){
			return res.send({
				success:false,
				message:"Server error",
			})
		}
		else if (word){
			return res.send({
				success:true,
				message:"New word entered in the database"
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