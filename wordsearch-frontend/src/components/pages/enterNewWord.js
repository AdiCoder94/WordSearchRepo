import React, { Component } from 'react';

import MemberHeader from "../Components/memberHeader";
import NewWordFormComponent from "../Components/newWordFormComponent";
import WordPreview from "../Components/newWordPreview";

class EnterNewWord extends Component{
	constructor(props){
		super(props);
		this.state = {
			newWord:"XXX",
			originLang:"XXX",
			rootWord:"XXX",
			partOfSpeech:"XXX",
			subCategory:"XXX",
			wordConnotation:"XXX",
			definition:"XXX",
		}
		this.handleNewWordChange = this.handleNewWordChange.bind(this);	
		this.handleOriginLangChange = this.handleOriginLangChange.bind(this);	
		this.handleRootWordChange = this.handleRootWordChange.bind(this);	
		this.handleCategoryChange = this.handleCategoryChange.bind(this);	
		this.handleSubCategoryChange = this.handleSubCategoryChange.bind(this);	
		this.handleConnotationChange = this.handleConnotationChange.bind(this);	
		this.handleDefinitionChange = this.handleDefinitionChange.bind(this);	
	}

	handleNewWordChange(e){
		this.setState({
			newWord:e.target.value
		})
	}
	handleOriginLangChange(e){
		this.setState({
			originLang:e.target.value
		})
	}
	handleRootWordChange(e){
		this.setState({
			rootWord:e.target.value
		})
	}
	handleCategoryChange(e){
		this.setState({
			partOfSpeech:e.target.value
		})
	}
	handleSubCategoryChange(e){
		this.setState({
			subCategory:e.target.value
		})
	}
	handleConnotationChange(e){
		this.setState({
			wordConnotation:e.target.value
		})
	}
	handleDefinitionChange(e){
		this.setState({
			definition:e.target.value,
		})
	}

	render(props){
		return(
			<React.Fragment>
				<MemberHeader />
				<div className="site-article-container">
					<h2 className='section-heading'>Enter word in the database</h2>
	          		<hr />
					<div className='form-article-container flex-row'>
						<NewWordFormComponent changeNewWord={this.handleNewWordChange} changeOriginLang={this.handleOriginLangChange} changeRootWord={this.handleRootWordChange} changeCategory={this.handleCategoryChange} changeSubCategory={this.handleSubCategoryChange} changeConnotation={this.handleConnotationChange} changeDefinition={this.handleDefinitionChange} />
						<WordPreview newWord={this.state.newWord} originLang={this.state.originLang} rootWord={this.state.rootWord} partOfSpeech={this.state.partOfSpeech} subCategory={this.state.subCategory} wordConnotation={this.state.wordConnotation} definition={this.state.definition} />	
					</div>	
					<div className='btn-holder'>
						<button className='view-word-preview-btn site-btn'>Save in the database</button>
					</div>
				</div>	
			</React.Fragment>
		)
	}
}

export default EnterNewWord;