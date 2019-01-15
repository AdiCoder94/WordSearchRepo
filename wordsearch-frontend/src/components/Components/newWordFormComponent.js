import React, { Component } from 'react';

function getWordData(){
	
}

class NewWordFormComponent extends Component{
	constructor(props){
		super(props);
		this.state = {
			newWord:"",
			originLang:"",
			rootWord:"",
			partOfSpeech:"",
			subCategory:"",
			wordConnotation:""
		}
		this.onTextboxChangeNewWord = this.onTextboxChangeNewWord.bind(this);
		this.onTextboxChangeLanguageOfOrigin = this.onTextboxChangeLanguageOfOrigin.bind(this);
		this.onTextboxChangeRootWord = this.onTextboxChangeRootWord.bind(this);
		this.onTextboxChangePartOfSpeech = this.onTextboxChangePartOfSpeech.bind(this);
		this.onTextboxChangeSubCategory = this.onTextboxChangeSubCategory.bind(this);
		this.onTextboxChangeConnotation = this.onTextboxChangeConnotation.bind(this);
	}

	onTextboxChangeNewWord(e){
		this.setState({
			newWord:e.target.value
		})
	}

	onTextboxChangeLanguageOfOrigin(e){
		this.setState({
			originLang:e.target.value
		})
	}

	onTextboxChangeRootWord(e){
		this.setState({
			rootWord:e.target.value
		})
	}

	onTextboxChangePartOfSpeech(e){
		this.setState({
			partOfSpeech:e.target.value
		})
	}

	onTextboxChangeSubCategory(e){
		this.setState({
			subCategory:e.target.value
		})
	}

	onTextboxChangeConnotation(e){
		this.setState({
			wordConnotation:e.target.value
		})
	}

	render(){
		return(
			<React.Fragment>
				<div className='new-word-form flex-column'>
					<div className='form-top-section flex-row'>
						<div className='word-column flex-column'>
							<span className='subheading-text'>Word: </span>
							<input className='enter-word-form' value={this.state.newWord} onChange={this.onTextboxChangeNewWord} />
						</div>
						<div className='etymology-column flex-column'>
							<div className='inputfield flex-column'>
								<span className='subheading-text'>Language of origin: </span>
								<input className='enter-word-form' value={this.state.originLang} onChange={this.onTextboxChangeLanguageOfOrigin}/>
							</div>
							<div className='inputfield flex-column'>
								<span className='subheading-text'>Root word: </span>
								<input className='enter-word-form' value={this.state.rootWord} onChange={this.onTextboxChangeRootWord} />
							</div>
						</div>
						<div className='grammar-column flex-column'>
							<div className='inputfield flex-column'> 
								<span className='subheading-text'>Part of speech: </span>
								<input className='enter-word-form' value={this.state.partOfSpeech} onChange={this.onTextboxChangePartOfSpeech} />
							</div>
							<div className='inputfield flex-column'>
								<span className='subheading-text'>Subcategory: </span>
								<input className='enter-word-form' value={this.state.subCategory} onChange={this.onTextboxChangeSubCategory} />
							</div>
							<div className='inputfield flex-column'>
								<span className='subheading-text'>Connotation: </span>
								<input className='enter-word-form' value={this.state.wordConnotation} onChange={this.onTextboxChangeConnotation} />
							</div>
						</div>
					</div>
					<div className='form-bottom-section'>
						<p className='subheading-text'>Meaning: </p>
						<textarea className='meaning-textarea'>
						</textarea>
					</div>
					<div className='btn-holder'>
						<button className='view-word-preview-btn site-btn'>Preview</button>
					</div>
				</div>											
			</React.Fragment>
		)
	}
}

export default NewWordFormComponent;