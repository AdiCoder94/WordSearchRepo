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
        meaning
    } = req.body;

    if (!enteredWord || !partOfSpeech || !partOfSpeechSubCategory || !connotation || !root || !languageOfOrigin || !meaning) {
        return res.send({
            message: "Inadequate data"
        })
    }

    Words.findOne({
        enteredWord: enteredWord
    }, (err, doc) => {
        if (err) {
            return res.send({
                message: "Server error"
            })
        } else if (doc) {
            return res.send({
                message: "Sorry word already exists"
            })
        } else if (!err) {
            //creating new word document in the database
            const newWord = new Words();
            newWord.enteredWord = enteredWord;
            newWord.partOfSpeech = partOfSpeech;
            newWord.partOfSpeechSubCategory = partOfSpeechSubCategory;
            newWord.connotation = connotation;
            newWord.root = root;
            newWord.languageOfOrigin = languageOfOrigin;
            newWord.meaning = meaning;
            console.log(newWord);
            newWord.save((err, result) => {
                if (err) {
                    return res.send({
                        message: "Server error"
                    });
                }
                return res.send({
                    message:"Word saved to database"
                })
            })
        }
    })
})

module.exports = router;