This is backend for the word search app.

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
					message:"Word saved!" })
          
          })
