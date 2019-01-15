import React, { Component } from 'react';

class WordPreview extends Component{

	render(){
		return(
			<React.Fragment>
				<div className='word-preview-section flex-column'>
					<div className='word-partofspeech flex-row'>
						<h1 className='word-preview-txt'>New word</h1>
						<p className='noun-type-txt'>part-of-speech-subcategory</p>
						<p className='connotation-txt'>Connotation</p>
					</div>
					<div className="etymology-section flex-column">
						<p className='originlanguage-txt'><b>Language of origin:</b>Hindi</p>
						<p className='rootword-txt'><b>Root word:</b>Hello</p>
					</div>
					<div className='meaning-section'>
						<h4 className='meaning-heading-txt'>Meaning:</h4>
						<p className="meaning-desc-txt">Vestibulum massa nisl, sodales vitae ultricies vitae, placerat at erat. Phasellus quis tellus quis neque dictum condimentum. Etiam vehicula lorem eget urna pulvinar tempus. Integer rutrum enim eget ex iaculis imperdiet. Integer porta augue nulla, at auctor sapien interdum vitae. Aliquam porttitor aliquam nulla</p>
					</div>
				</div>
			</React.Fragment>
		)	
	}
}

export default WordPreview;