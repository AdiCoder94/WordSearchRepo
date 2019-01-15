import React, { Component } from 'react';

import MemberHeader from "../Components/memberHeader";
import NewWordFormComponent from "../Components/newWordFormComponent";
import WordPreview from "../Components/newWordPreview";


class EnterNewWord extends Component{
	render(){
		return(
			<React.Fragment>
				<MemberHeader />
				<div className="site-article-container">
					<h2 className='section-heading'>Enter word in the database</h2>
	          		<hr />
					<div className='form-article-container flex-row'>
						<NewWordFormComponent />
						<WordPreview />	
					</div>	
				</div>	
			</React.Fragment>
		)
	}
}

export default EnterNewWord;