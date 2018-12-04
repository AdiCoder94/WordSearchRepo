import React from 'react';
import { Switch, Route } from 'react-router-dom';


import PublicDashboard from './components/publicDashboard';
import StorySetting from './components/pages/Setting';
import StoryConflict from './components/pages/Conflict';
import StoryCharacter from './components/pages/Characters';
import StoryTheme from './components/pages/Theme';
import StoryPlot from './components/pages/Plot';
import SignUp from './components/pages/SignUp';
import MemberHeader from './components/memberHeader';


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
		</React.Fragment>
	)
}

export default Routes;