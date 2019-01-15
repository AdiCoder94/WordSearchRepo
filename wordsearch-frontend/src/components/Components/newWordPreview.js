import React, { Component } from 'react';

class WordPreview extends Component{
	constructor(props){
		super(props);	
	}

	componentDidUpdate(){
		console.log("definition props" + this.props.definition);
	}

	render(){
		return(
			<React.Fragment>
				<div className='word-preview-section flex-column'>
					<div className='word-partofspeech flex-row'>
						<h1 className='word-preview-txt'>{this.props.newWord}</h1>
						<p className='noun-type-txt'>{this.props.subCategory} {this.props.partOfSpeech}</p>
						<p className='connotation-txt'>{this.props.wordConnotation}</p>
					</div>
					<div className="etymology-section flex-column">
						<p className='originlanguage-txt'><b>Language of origin:</b>{this.props.originLang}</p>
						<p className='rootword-txt'><b>Root word:</b>{this.props.rootWord}</p>
					</div>
					<div className='meaning-section'>
						<h4 className='meaning-heading-txt'>Meaning:</h4>
						<p className="meaning-desc-txt">{this.props.definition}</p>
					</div>
				</div>
			</React.Fragment>
		)	
	}
}

export default WordPreview;