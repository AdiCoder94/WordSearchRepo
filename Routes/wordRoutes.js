var express = require('express');
var router = express.Router();

var getToken = require('../config/middlewares').getToken
var authenticateUser = require('../config/middlewares').authenticateJWT

var Words = require('../Models/word.model');
var UserSession = require('../Models/userSession.model');
var User = require('../Models/members.model');


router.post('/new', authenticateUser, function (req, res, next) {
	var {
		enteredWord,
		partOfSpeech,
		partOfSpeechSubCategory,
		connotation,
		root,
		languageOfOrigin,
		definition
	} = req.body;

	if (!enteredWord || !partOfSpeech || !partOfSpeechSubCategory || !connotation || !root || !languageOfOrigin || !definition) {
		return res.send({
			err_msg: "Fill all the fields" })
	}

	Words.findOne({
		enteredWord: enteredWord
	}, (err, doc) => {
		if (err) {
			return res.send({
				err_msg: err })
		} else if (doc) {
			return res.send({
				err_msg: "Word already exists in the database" })
		} else if (!err) {
			//creating new word document in the database
			const currentUser = req.currentUser.user
			const newWord = new Words();
			newWord.enteredWord = newWord.capitalize(enteredWord);
			newWord.partOfSpeech = partOfSpeech;
			newWord.partOfSpeechSubCategory = partOfSpeechSubCategory;
			newWord.connotation = connotation;
			newWord.root = root;
			newWord.languageOfOrigin = languageOfOrigin;
			newWord.definition = definition;
			newWord.savedBy.push(currentUser)
			newWord.save((err, result) => {
				if (err) {
					return res.send({
						success: false,
						err_msg: err });
				}
				return res.send({
					success: true,
					word: result,
					user: currentUser,
					message:"Word saved!" })})}})})


router.get('/allwords', authenticateUser, function(req, res, next){
	Words.find({})
	.populate('savedBy')
	.exec((err, doc) => {
		if(err){
			return res.send("Server error")	}
		else if(doc){
			return res.send(doc) }})})


router.post('/viewwordsbyletter', authenticateUser, function(req, res, next){

	var { letter } = req.body
	letter = letter.trim()
	var toMatch = `^${letter}`

	Words.find({}, (err, docs) => {
		if(err){
			return res.send({
				success: false,
				err_msg: err }) 
		}else {
			var enteredWordArray = []
			docs.forEach(word => {
				if(word.enteredWord.match(toMatch)){
					enteredWordArray.push(word)}
				else return null })
			res.send({
				success: true,
				obj: enteredWordArray	})}})
			})			

module.exports = router;
