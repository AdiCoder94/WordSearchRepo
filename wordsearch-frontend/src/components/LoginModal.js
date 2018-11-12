import React, { Component } from 'react';

import '../scss/base_styles.scss';
import '../scss/article_styles.scss';

class LoginModal extends Component{
	constructor(props){
		super(props);
		this.state = {
			viewLoginModal:true
		}
		this.hideModal = this.hideModal.bind(this);
	}
	hideModal(){
		this.setState(state =>({
				viewLoginModal:false
			})
		)
		console.log(this.state.viewLoginModal + "from child");
	}

	render(props){
		let hideModalClassName;
		(this.state.viewLoginModal) ? (hideModalClassName = "modal-container") : (hideModalClassName="hidden")
		return(
			<React.Fragment>
				<div className={hideModalClassName}>
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
							<button className="signup-form-btn modal-btn">Sign up</button>
							<button className='close-modal-btn modal-btn' onClick={this.hideModal}>Cancel</button>
							<button className="submit-form-btn modal-btn">Login</button>
						</div>
					</div>
				</div>
			</React.Fragment>
		)
	}
}

export default LoginModal;