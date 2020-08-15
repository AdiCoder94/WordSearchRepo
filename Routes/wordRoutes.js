var express = require('express');
var router = express.Router();

var Words = require('../Models/word.model');
const { compareSync } = require('bcrypt');

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
			const newWord = new Words();
			newWord.enteredWord = newWord.capitalize(enteredWord);
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
					message:"Word saved!" })})}})})

router.get('/allwords', function(req, res, next){
	Words.find({}, (err, doc) => {
		if(err){
		return res.send("Server error")	}
		else if(doc){
			return res.send(doc) }})})

router.get('/viewwordsbyletter/:letter', function(req, res, next){
	var { letter } = req.params
	var toMatch = `^${letter}`

	function matchToRegex(array){
		let resultArray = []
		array.forEach(string => {
			var re = new RegExp(toMatch)
			var result = string.match(re)
			console.log('is', result)
			if( result !== null ){
				resultArray.push(result.input) }})
		return resultArray }

	Words.find({}, (err, docs) => {
		if(err){
			return res.send({
				success: false,
				err_msg: err }) 
		}else {
			var enteredWordArray = []
			let matchedWords;
			var i = 0;
			docs.forEach(word => {
				enteredWordArray.push(word.enteredWord)
				++i;
				if(i === docs.length){
					matchedWords = matchToRegex(enteredWordArray).slice()
					return res.send({
						success: true,
						words: matchedWords })}})	
		}})})			

module.exports = router;

