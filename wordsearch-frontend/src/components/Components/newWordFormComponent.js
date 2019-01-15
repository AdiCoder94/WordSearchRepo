import React, { Component } from 'react';


class NewWordFormComponent extends Component{

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

	render(props){
		return(
			<React.Fragment>
				<div className='new-word-form flex-column'>
					<div className='form-top-section flex-row'>
						<div className='word-column flex-column'>
							<span className='subheading-text'>Word: </span>
							<input className='enter-word-form'  onChange={(e) => this.props.onTextboxChangeNewWord(e.target.value)} />
						</div>
						<div className='etymology-column flex-column'>
							<div className='inputfield flex-column'>
								<span className='subheading-text'>Language of origin: </span>
								<input className='enter-word-form'  onChange={(e) => this.props.onTextboxChangeLanguageOfOrigin(e.target.value)}/>
							</div>
							<div className='inputfield flex-column'>
								<span className='subheading-text'>Root word: </span>
								<input className='enter-word-form' onChange={(e) => this.props.onTextboxChangeRootWord(e.target.value)} />
							</div>
						</div>
						<div className='grammar-column flex-column'>
							<div className='inputfield flex-column'> 
								<span className='subheading-text'>Part of speech: </span>
								<input className='enter-word-form' onChange={(e) => this.props.onTextboxChangePartOfSpeech(e.target.value)} />
							</div>
							<div className='inputfield flex-column'>
								<span className='subheading-text'>Subcategory: </span>
								<input className='enter-word-form' onChange={(e) => this.props.onTextboxChangeSubCategory(e.target.value)} />
							</div>
							<div className='inputfield flex-column'>
								<span className='subheading-text'>Connotation: </span>
								<input className='enter-word-form' onChange={(e) => this.props.onTextboxChangeConnotation(e.target.value)} />
							</div>
						</div>
					</div>
					<div className='form-bottom-section'>
						<p className='subheading-text'>Meaning: </p>
						<textarea className='meaning-textarea'>
						</textarea>
					</div>
				</div>											
			</React.Fragment>
		)
	}
}

export default NewWordFormComponent;