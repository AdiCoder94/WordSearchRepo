import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../scss/base_styles.scss';
import '../../scss/article_styles.scss';

class LoginModal extends Component{
	constructor(props){
		super(props);
		this.state = {
			viewLoginModal:true,
			logInError:"",
			signUpUsername:'',
			logInPassword:''
		}
		this.hideModal = this.hideModal.bind(this);
		this.onTextboxChangeUserName = this.onTextboxChangeUserName.bind(this);
		this.onTextboxChangeLogInPassword = this.onTextboxChangeLogInPassword.bind(this);
		this.signIn = this.signIn.bind(this);
	}

	onTextboxChangeUserName(e){
		this.setState({
			signUpUsername:e.target.value
		})
	}

	onTextboxChangeLogInPassword(e){
		this.setState({
			logInPassword:e.target.value
		})
	}

	componentDidUpdate(){
		console.log("User name" + this.state.signUpUsername + " " + "password " + this.state.logInPassword)
	}

	onSignIn(){
		// grab state
		var {
			signUpUsername,
			logInPassword
		} = this.state;

		fetch('/api/account/signin',{

		})
	}

	hideModal(){
		this.setState(state =>({
				viewLoginModal:false
			})
		)
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
							<input type='text' onChange={this.onTextboxChangeUserName} />
						</div>
						<div className="password-section flex-row">
							<p className="password-subheading">Password:</p>
							<input type='text' onChange={this.onTextboxChangeLogInPassword} />
						</div>
						<div className='login-cancel-holder flex-row'>	
							<button className='close-modal-btn modal-btn' onClick={this.hideModal}>Cancel</button>
							<button className="submit-form-btn modal-btn" onClick={this.onSignIn} >Login</button>
						</div>
					</div>
				</div>
			</React.Fragment>
		)
	}
}

export default LoginModal;