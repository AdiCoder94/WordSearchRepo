import React, { Component } from 'react';

class NewWordFormComponent extends Component{
	constructor(props){
		super(props);

		this.state = {
			value:"There is no definition provided" }}

	render(){
		let {
			changeNewWord, 
			changeOriginLang, 
			changeRootWord, 
			changeCategory, 
			changeSubCategory, 
			changeConnotation, 
			changeDefinition,
			clearFormProps,
			showValue_Word,
			showValue_OriginLang,
			showValue_RootWord,
			showValue_PartOfSpeech,
			showValue_SubCategory,
			showValue_Connotation,
			showValue_Definition } = this.props
		
		if(clearFormProps === true){
			this.clearOnSave()}

		return(
			<React.Fragment>
				<div className='new-word-form flex-column'>
					<div className='form-top-section flex-row' id='form-top-section-id'>
						<div className='word-column flex-column'>
							<span className='subheading-text'>Word: </span>
							<input className='enter-word-form'
								onInput={changeNewWord} 
								value={showValue_Word}/></div>
						<div className='etymology-column flex-column'>
							<div className='inputfield flex-column'>
								<span className='subheading-text'>Language of origin: </span>
								<input className='enter-word-form' 
									onInput={changeOriginLang}  
									value={showValue_OriginLang}/></div>
							<div className='inputfield flex-column'>
								<span className='subheading-text'>Root word: </span>
								<input className='enter-word-form' 
									onInput={changeRootWord}  
									value={showValue_RootWord}/></div>
						</div>
						<div className='grammar-column flex-column'>
							<div className='inputfield flex-column'> 
								<span className='subheading-text'>Part of speech: </span>
								<input className='enter-word-form'  
									onInput={changeCategory}  
									value={showValue_PartOfSpeech}/></div>
							<div className='inputfield flex-column'>
								<span className='subheading-text'>Subcategory: </span>
								<input className='enter-word-form' 
									onInput={changeSubCategory}  
									value={showValue_SubCategory}/></div>
							<div className='inputfield flex-column'>
								<span className='subheading-text'>Connotation: </span>
								<input className='enter-word-form' 
									onInput={changeConnotation}  
									value={showValue_Connotation}/></div></div></div>
					<div className='form-bottom-section'>
						<p className='subheading-text'>Meaning: </p>
						<textarea className='meaning-textarea' 
							onInput={changeDefinition} 
							defaultValue="This is where you write the definition of the word" 
							value={showValue_Definition}/></div></div></React.Fragment>)}}

export default NewWordFormComponent;