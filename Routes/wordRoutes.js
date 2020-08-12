var express = require('express');
var router = express.Router();

var Words = require('../Models/word.model');

router.post('/new', function (req, res, next) {
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
			err_msg: "Inadequate data" })
	}

	Words.findOne({
		enteredWord: enteredWord
	}, (err, doc) => {
		if (err) {
			return res.send({
				err_msg: err })
		} else if (doc) {
			return res.send({
				err_msg: "Sorry word already exists" })
		} else if (!err) {
			//creating new word document in the database
			const newWord = new Words();
			newWord.enteredWord = enteredWord;
			newWord.partOfSpeech = partOfSpeech;
			newWord.partOfSpeechSubCategory = partOfSpeechSubCategory;
			newWord.connotation = connotation;
			newWord.root = root;
			newWord.languageOfOrigin = languageOfOrigin;
			newWord.definition = definition;
			newWord.save((err, result) => {
				if (err) {
					return res.send({
						success: false,
						err_msg: err });
				}
				return res.send({
					success: true,
					word: result,
					message:"Word saved to database" })})}})})

router.get('/allwords', function(req, res, next){
	Words.find({}, (err, doc) => {
		if(err){
		return res.send("Server error")	}
		else if(doc){
			return res.send(doc) }})})

module.exports = router;