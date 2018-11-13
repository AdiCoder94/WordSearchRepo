import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../scss/base_styles.scss';
import '../scss/article_styles.scss';

class SignupModal extends Component{
	constructor(props){
		super(props);
		this.state = {
			viewSignUpModal:true
		}
		this.hideModal = this.hideModal.bind(this);
	}
	hideModal(){
		this.setState(state =>({
				viewSignUpModal:false
			})
		)
	}

	render(props){
		let hideModalClassName;
		(this.state.viewSignUpModal) ? (hideModalClassName = "modal-container") : (hideModalClassName="hidden")
		return(
			<React.Fragment>
				<div className={hideModalClassName}>
					<div className="signup-modal-content flex-column">
						<div className="username-section flex-row">	
							<p className="username-subheading">User name:</p>
							<input type='text' />
						</div>
						<div className="email-section flex-row">	
							<p className="email-subheading">Email:</p>
							<input type='text' />
						</div>
						<div className="password-section flex-row">
							<p className="password-subheading">Password:</p>
							<input type='text' />
						</div>
						<div className="confirm-password-section flex-row">
							<p className="confirm-password-subheading">Confirm password:</p>
							<input type='text' />
						</div>
						<div className='login-cancel-holder flex-row'>	
							<button className='close-modal-btn modal-btn' onClick={this.hideModal}>Cancel</button>
							<button className="submit-form-btn modal-btn">Submit</button>
						</div>
					</div>
				</div>
			</React.Fragment>
		)
	}
}

export default SignupModal;