import React from 'react';
import { Route } from 'react-router-dom';

import PublicDashboard from './components/Pages/publicDashboard';
import StorySetting from './components/Pages/Setting';
import StoryConflict from './components/Pages/Conflict';
import StoryCharacter from './components/Pages/Characters';
import StoryTheme from './components/Pages/Theme';
import StoryPlot from './components/Pages/Plot';
import MemberHeader from './components/Components/memberHeader';
import EnterNewWord from './components/Pages/enterNewWord';
import ViewAllWords from './components/Pages/viewAllWords';


function Routes(){
	return(	
		<React.Fragment>
			<Route path='' component={PublicDashboard} exact />
			<Route path='/setting' component={StorySetting} exact />
			<Route path='/conflict' component={StoryConflict} exact />
			<Route path='/character' component={StoryCharacter} exact />
			<Route path='/theme' component={StoryTheme} exact />
			<Route path='/plot' component={StoryPlot} exact />
			<Route path='/memberdashboard' component={MemberHeader} exact />
			<Route path='/memberdashboard/viewallword' component={ViewAllWords} exact />
			<Route path='/memberdashboard/new_entry' component={EnterNewWord} exact />
		</React.Fragment>
	)
}

export default Routes;