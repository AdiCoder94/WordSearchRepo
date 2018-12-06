import React from 'react';
import '../../scss/article_styles.scss';

import Header from '../Components/header';
import ElementOfStory from '../Components/ElementsOfStory';

function StoryPlot(){
	return(
		<React.Fragment>
			<Header />
			<div className="article-container flex-row">
	          	<div className='article-left-section'>
	            <ElementOfStory />
	          	</div>  
	          <div className='article-right-section'>
				<div className="elementstory-desc-container">
					<h2 className='section-heading'>Plots</h2>
					<hr />
				</div>	
	          	</div>
        	</div>	
		</React.Fragment>
	)
}

export default StoryPlot;
