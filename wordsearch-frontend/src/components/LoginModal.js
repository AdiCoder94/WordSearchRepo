import React, { Component } from 'react';

import '../scss/base_styles.scss';
import '../scss/article_styles.scss';

class LoginModal extends Component{
	render(props){
		return(
			<React.Fragment>
				<div className="modal-container">
					<div className="modal-content flex-column">
						<div className="username-section flex-row">	
							<p className="username-subheading">User name:</p>
							<input type='text' />
						</div>
						<div className="password-section flex-row">
							<p className="password-subheading">Password:</p>
							<input type='text' />
						</div>
						<div className='login-cancel-holder flex-row'>	
							<button className='close-modal-btn modal-btn'>Cancel</button>
							<button className="submit-form-btn modal-btn">Login</button>
						</div>
					</div>
				</div>
			</React.Fragment>
		)
	}
}

export default LoginModal;