import React, { Component } from 'react';

import '../../scss/base_styles.scss';
import '../../scss/header_styles.scss';
import '../../scss/article_styles.scss';

class NewWordFormComponent extends Component{
	render(){
		return(
			<React.Fragment>
				<div className='site-article-container'>
					<h2 className='section-heading'>Enter word in the database</h2>
	          		<hr />
					<div className='form-article-container flex-row'>	
						<div className='new-word-form flex-column'>
							<div className='form-top-section flex-row'>
								<div className='word-column flex-column'>
									<span className='subheading-text'>Word: </span>
									<input className='enter-word-form' />
								</div>
								<div className='etymology-column flex-column'>
									<div className='inputfield flex-column'>
										<span className='subheading-text'>Language of origin: </span>
										<input className='enter-word-form' />
									</div>
									<div className='inputfield flex-column'>
										<span className='subheading-text'>Root word: </span>
										<input className='enter-word-form' />
									</div>
								</div>
								<div className='grammar-column flex-column'>
									<div className='inputfield flex-column'> 
										<span className='subheading-text'>Part of speech: </span>
										<input className='enter-word-form' />
									</div>
									<div className='inputfield flex-column'>
										<span className='subheading-text'>Subcategory: </span>
										<input className='enter-word-form' />
									</div>
									<div className='inputfield flex-column'>
										<span className='subheading-text'>Connotation: </span>
										<input className='enter-word-form' />
									</div>
								</div>
							</div>
							<div className='form-bottom-section'>
								<p className='subheading-text'>Meaning: </p>
								<textarea className='meaning-textarea'>
								</textarea>
							</div>
						</div>
						<div className='word-preview-section flex-column'>
							<div className='word-partofspeech flex-row'>
								<h1 className='word-preview-txt'>New word</h1>
								<p className='noun-type-txt'>part-of-speech-subcategory</p>
								<p className='connotation-txt'>Connotation</p>
							</div>
							<div className="etymology-section flex-column">
								<p className='originlanguage-txt'>Language of origin</p>
								<p className='rootword-txt'>Root word</p>
							</div>
							<div className='meaning-section'>
								<h4 className='meaning-heading-txt'>Meaning:</h4>
								<p className="meaning-desc-txt">Vestibulum massa nisl, sodales vitae ultricies vitae, placerat at erat. Phasellus quis tellus quis neque dictum condimentum. Etiam vehicula lorem eget urna pulvinar tempus. Integer rutrum enim eget ex iaculis imperdiet. Integer porta augue nulla, at auctor sapien interdum vitae. Aliquam porttitor aliquam nulla</p>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		)
	}
}

export default NewWordFormComponent;