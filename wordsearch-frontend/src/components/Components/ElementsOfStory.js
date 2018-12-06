import React from 'react';
import { Link } from 'react-router-dom';

import '../../scss/base_styles.scss';
import '../../scss/article_styles.scss';

function ElementOfStory(){
	return(
		<React.Fragment>
			<div className="elementstory-container">
				<h2 className='section-heading'>Elements of a story</h2>
				<ul className='element-of-story-list'>	
					<li><Link to='/setting'>Setting</Link></li>
					<li><Link to='/character'>Character</Link></li>
					<li><Link to='/plot'>Plot</Link></li>
					<li><Link to='/conflict'>Conflict</Link></li>
					<li><Link to='/theme'>Theme</Link></li>
				</ul>
			</div>
		</React.Fragment>
	)
}

export default ElementOfStory;	