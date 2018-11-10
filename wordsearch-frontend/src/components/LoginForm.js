import React, { Component } from 'react';

import '../scss/base_styles.scss';
import '../scss/header_styles.scss';

export default class LoginForm extends Component {
 	
 	constructor(props) {
 		super(props);
 	}

 	render(){
 		return(
 			<React.Fragment>	
				<div className="login-form-holder flex-row">
					<div className="username-section flex-row">	
						<p className="username-subheading">User name:</p>
						<input type='text' />
					</div>
					<div className="password-section flex-row">
						<p className="password-subheading">Password:</p>
						<input type='text' />
					</div>				
				<button className='submit-logindata-btn'>Submit</button>
				</div>
 			</React.Fragment>
 		)
 	}
 } 