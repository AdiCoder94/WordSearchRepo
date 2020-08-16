import React from 'react';
import { Route } from 'react-router-dom';

import PublicDashboard from './components/Pages/publicDashboard';
import StorySetting from './components/Pages/Setting';
import StoryConflict from './components/Pages/Conflict';
import StoryCharacter from './components/Pages/Characters';
import StoryTheme from './components/Pages/Theme';
import StoryPlot from './components/Pages/Plot';
import EnterNewWord from './components/Pages/enterNewWord';
import ViewAllWords from './components/Pages/viewAllWords';
import MemberDashboard from './components/Pages/memberDashboard';
import ViewWordsByLetter from './components/Pages/viewWordsByLetter';


function Routes(){
	return(	
		<React.Fragment>
			<Route path='/' component={PublicDashboard} exact />
			<Route path='/setting' component={StorySetting} exact />
			<Route path='/conflict' component={StoryConflict} exact />
			<Route path='/character' component={StoryCharacter} exact />
			<Route path='/theme' component={StoryTheme} exact />
			<Route path='/plot' component={StoryPlot} exact />
			<Route path='/memberdashboard' component={MemberDashboard} exact />
			<Route path='/memberdashboard/viewallwords' component={ViewAllWords} exact />
			<Route path='/memberdashboard/new_entry' component={EnterNewWord} exact />
			<Route path='/memberdashboard/viewwordsbyletter/:letter' component={ViewWordsByLetter} exact />
		</React.Fragment>
	)
}

export default Routes;