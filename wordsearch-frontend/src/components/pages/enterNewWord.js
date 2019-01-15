import React, { Component } from 'react';

import MemberHeader from "../Components/memberHeader";
import NewWordFormComponent from "../Components/newWordFormComponent";
import WordPreview from "../Components/newWordPreview";

class EnterNewWord extends Component{
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
		this.storeWordInfo = this.storeWordInfo.bind(this);
	}

	storeWordInfo(){
		console.log("this is component")
	}

	render(props){
		return(
			<React.Fragment>
				<MemberHeader />
				<div className="site-article-container">
					<h2 className='section-heading'>Enter word in the database</h2>
	          		<hr />
					<div className='form-article-container flex-row'>
						<NewWordFormComponent storePreview={this.storeWordInfo} />
						<WordPreview />	
					</div>	
					<div className='btn-holder'>
						<button className='view-word-preview-btn site-btn' onClick={this.props.storePreview}>Preview</button>
					</div>
				</div>	
			</React.Fragment>
		)
	}
}

export default EnterNewWord;