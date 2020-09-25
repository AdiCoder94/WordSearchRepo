import React from 'react';
import { Link } from 'react-router-dom';

import '../../scss/base_styles.scss';
import '../../scss/article_styles.scss';

function DashboardLinks(){
	return(
		<React.Fragment>
			<div className="elementstory-container">				
				<ul className='element-of-story-list'>	
					<li><Link to='/memberdashboard/new_entry'>Enter new word</Link></li>
					<li><Link to='/memberdashboard/viewallwords'>View database</Link></li>
          </ul></div></React.Fragment>)}

export default DashboardLinks;	