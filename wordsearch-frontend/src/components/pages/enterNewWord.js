import React, { Component } from 'react';

import MemberHeader from "../Components/memberHeader";
import NewWordFormComponent from "../Components/newWordFormComponent";
import WordPreview from "../Components/newWordPreview";

import { frontendURL, backendURL, enternewwordURL } from '../../config/constants';

class EnterNewWord extends Component{
	constructor(){
		super();
		this.state = {
			newWord:"",
			originLang:"",
			rootWord:"",
			partOfSpeech:"",
			subCategory:"",
			wordConnotation:"",
			definition:"", 
			isDuplicate: "",
			showWordSavedMsg: false }

		this.handleNewWordChange = this.handleNewWordChange.bind(this);	
		this.handleOriginLangChange = this.handleOriginLangChange.bind(this);	
		this.handleRootWordChange = this.handleRootWordChange.bind(this);	
		this.handleCategoryChange = this.handleCategoryChange.bind(this);	
		this.handleSubCategoryChange = this.handleSubCategoryChange.bind(this);	
		this.handleConnotationChange = this.handleConnotationChange.bind(this);	
		this.handleDefinitionChange = this.handleDefinitionChange.bind(this);	
		this.saveWord = this.saveWord.bind(this); 
		this.capitalizeFirstLetter = this.capitalizeFirstLetter.bind(this); 
		this.changeSaveWordMsgState = this.changeSaveWordMsgState.bind(this);}

	handleNewWordChange(e){
		this.setState({	newWord:e.target.value })}

	handleOriginLangChange(e){
		this.setState({	originLang:e.target.value })}

	handleRootWordChange(e){
		this.setState({	rootWord:e.target.value })}

	handleCategoryChange(e){
		this.setState({	partOfSpeech:e.target.value })}

	handleSubCategoryChange(e){
		this.setState({	subCategory:e.target.value })}

	handleConnotationChange(e){
		this.setState({	wordConnotation:e.target.value })}

	handleDefinitionChange(e){
		this.setState({	definition:e.target.value })}

	changeSaveWordMsgState(){
		if(this.state.showWordSavedMsg){
			this.setState({ showWordSavedMsg: false })}}	

	capitalizeFirstLetter(word){
		const lowerCased = word.toLowerCase()
		return word.charAt(0).toUpperCase() + lowerCased.slice(1)
	}		

	saveWord(){
		// grabbing state
		var {
			newWord,
			originLang,
			rootWord,
			partOfSpeech,
			subCategory,
			wordConnotation,
			definition } = this.state

		fetch(`${backendURL}${enternewwordURL}`, {
			method: 'POST',
			headers:{
				'Access-Control-Allow-Origin': `${frontendURL}`,
				'Content-Type': 'application/json'},
			body: JSON.stringify({
				enteredWord: this.capitalizeFirstLetter(newWord),
				languageOfOrigin: originLang,
				root: rootWord,
				partOfSpeech: partOfSpeech,
				partOfSpeechSubCategory: subCategory,
				connotation: wordConnotation,
				definition: definition})})
			.then(res => res.json())
			.then(json => {
				if(json.success){
					this.setState({
						newWord: '',
						originLang: '',
						rootWord: '',
						partOfSpeech: '',
						subCategory: '',
						wordConnotation: '',
						definition: '',
						savingStatus: json.message,
						showWordSavedMsg: true }, () => {
							setTimeout(this.changeSaveWordMsgState, 1000)})}
				else {
					this.setState({
						savingStatus: json.err_msg,
						showWordSavedMsg: true }, () => {
						setTimeout(this.changeSaveWordMsgState, 1000)})}})}		

	render(){
		let wordSaved_msg;
		let {
			newWord,
			originLang,
			rootWord,
			partOfSpeech,
			subCategory,
			wordConnotation,
			definition,
			showWordSavedMsg
		} = this.state

		if(showWordSavedMsg ? 
				wordSaved_msg = <span className='wordsaved_msg'>{this.state.savingStatus}</span> :
				wordSaved_msg = <React.Fragment />)

		return(
			<React.Fragment>
				<MemberHeader />
				<div className="site-article-container">
					<h2 className='section-heading'>Enter word in the database</h2>
					<hr />
					<div className='form-article-container flex-row'>
						<NewWordFormComponent
							changeNewWord={this.handleNewWordChange} 
							showValue_Word={newWord}
							changeOriginLang={this.handleOriginLangChange} 
							showValue_OriginLang={originLang} 
							changeRootWord={this.handleRootWordChange} 
							showValue_RootWord={rootWord}
							changeCategory={this.handleCategoryChange} 
							showValue_PartOfSpeech={partOfSpeech}
							changeSubCategory={this.handleSubCategoryChange}
							showValue_SubCategory={subCategory} 
							changeConnotation={this.handleConnotationChange} 
							showValue_Connotation={wordConnotation}
							changeDefinition={this.handleDefinitionChange}
							showValue_Definition={definition} />
						<WordPreview 
							newWord={newWord} 
							originLang={originLang} 
							rootWord={rootWord} 
							partOfSpeech={partOfSpeech} 
							subCategory={subCategory} 
							wordConnotation={wordConnotation} 
							definition={definition} /></div>	
					<div className='savedword_btn-holder flex-row'>
						<button className='saveword-btn site-btn' onClick={this.saveWord}>Save</button>
						{ wordSaved_msg }</div></div></React.Fragment>)}}

export default EnterNewWord;
