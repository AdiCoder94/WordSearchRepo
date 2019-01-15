import React, { Component } from 'react';


class NewWordFormComponent extends Component{
	constructor(props){
		super(props);
		this.state ={
			value:"There is no definition provided"
		}
	}
	render(props){
		return(
			<React.Fragment>
				<div className='new-word-form flex-column'>
					<div className='form-top-section flex-row'>
						<div className='word-column flex-column'>
							<span className='subheading-text'>Word: </span>
							<input className='enter-word-form' onChange={this.props.changeNewWord} />
						</div>
						<div className='etymology-column flex-column'>
							<div className='inputfield flex-column'>
								<span className='subheading-text'>Language of origin: </span>
								<input className='enter-word-form' onChange={this.props.changeOriginLang}/>
							</div>
							<div className='inputfield flex-column'>
								<span className='subheading-text'>Root word: </span>
								<input className='enter-word-form' onChange={this.props.changeRootWord} />
							</div>
						</div>
						<div className='grammar-column flex-column'>
							<div className='inputfield flex-column'> 
								<span className='subheading-text'>Part of speech: </span>
								<input className='enter-word-form'  onChange={this.props.changeCategory} />
							</div>
							<div className='inputfield flex-column'>
								<span className='subheading-text'>Subcategory: </span>
								<input className='enter-word-form' onChange={this.props.changeSubCategory} />
							</div>
							<div className='inputfield flex-column'>
								<span className='subheading-text'>Connotation: </span>
								<input className='enter-word-form' onChange={this.props.changeConnotation} />
							</div>
						</div>
					</div>
					<div className='form-bottom-section'>
						<p className='subheading-text'>Meaning: </p>
						<textarea className='meaning-textarea' onChange={this.props.changeDefinition} defaultValue="This is where you write the definition of the word" />
					</div>
				</div>											
			</React.Fragment>
		)
	}
}

export default NewWordFormComponent;