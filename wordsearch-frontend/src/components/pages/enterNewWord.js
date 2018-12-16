import React, { Component } from 'react';

import MemberHeader from "../Components/memberHeader";
import NewWordFormComponent from "../Components/newWordFormComponent";

class EnterNewWord extends Component{
	render(){
		return(
			<React.Fragment>
				<MemberHeader />
				<NewWordFormComponent />
			</React.Fragment>
		)
	}
}

export default EnterNewWord;