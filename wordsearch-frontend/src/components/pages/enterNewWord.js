import React, { Component } from 'react';
import { connect } from 'react-redux';

import MemberHeader from "../Components/memberHeader";
import NewWordFormComponent from "../Components/newWordFormComponent";
import WordPreview from "../Components/newWordPreview";

import * as wordActions from '../../redux_components/actions/wordActions/wordActionCreator';

class EnterNewWord extends Component{
	constructor(props){
		super();
		this.state = {
			newWord:"",
			originLang:"",
			rootWord:"",
			partOfSpeech:"",
			subCategory:"",
			wordConnotation:"",
			definition:"", 
			refreshForm: false  }

		this.handleNewWordChange = this.handleNewWordChange.bind(this);	
		this.handleOriginLangChange = this.handleOriginLangChange.bind(this);	
		this.handleRootWordChange = this.handleRootWordChange.bind(this);	
		this.handleCategoryChange = this.handleCategoryChange.bind(this);	
		this.handleSubCategoryChange = this.handleSubCategoryChange.bind(this);	
		this.handleConnotationChange = this.handleConnotationChange.bind(this);	
		this.handleDefinitionChange = this.handleDefinitionChange.bind(this);	}

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

	static getDerivedStateFromProps(props, state){
		if(props.addwordState.isSuccess !== state.refreshForm){
			return {
				refreshForm: props.addwordState.isSuccess,
				newWord:"",
				originLang:"",
				rootWord:"",
				partOfSpeech:"",
				subCategory:"",
				wordConnotation:"",
				definition:"" }
		}
	}	

	render(){
		let {
			newWord,
			originLang,
			rootWord,
			partOfSpeech,
			subCategory,
			wordConnotation,
			definition,
		} = this.state

		let wordDetail = {
			newWord, 
			originLang,
			rootWord,
			partOfSpeech,
			subCategory,
			wordConnotation,
			definition }

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
						<button className='saveword-btn site-btn' onClick={() => this.props.saveWord(wordDetail)}>Save</button>
							{this.props.addwordState.err}{this.props.addwordState.savedStatus}</div></div></React.Fragment>)}}

const mapStateToProps = (state) => {
	return {
		addwordState: state.addwordState
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		saveWord: wordDetail => dispatch(wordActions.initiateAddWord(wordDetail))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(EnterNewWord);
