const mongoose = require ('mongoose');

// creating schema for entered words
const wordSchema = new mongoose.Schema({
	enteredWord: { type: String, required: true, default: '' },
	partOfSpeech: { type: String, required: true, default: '' },
	partOfSpeechSubCategory: { type: String, required: true, default: '' },
	connotation: { type: String, required: true, default: '' },
	root: { type: String, required: true, default: '' },
	languageOfOrigin : { type: String, required: true, default: '' },
	meaning : { type: String, required: true, default: '' }
})

//compiling the member schema to model and exporting
const EnteredWord = mongoose.model("Word",wordSchema)
module.exports = EnteredWord;