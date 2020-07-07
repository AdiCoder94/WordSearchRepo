import React from 'react';
import '../../scss/article_styles.scss';

import Header from '../Components/header';
import ElementOfStory from '../Components/ElementsOfStory';

function StoryCharacter(){
	return(
		<React.Fragment>
			<Header />
			<div className='site-article-container'>
				<h2 className='section-heading'>Elements of a story</h2>
				<hr />
				<div className="article-container flex-row">
					<div className='article-left-section'>
							<ElementOfStory /></div>  
					<div className='article-right-section'>
						<h2 className='section-heading'>Character</h2>
						<hr /></div></div></div></React.Fragment>)}

export default StoryCharacter;
