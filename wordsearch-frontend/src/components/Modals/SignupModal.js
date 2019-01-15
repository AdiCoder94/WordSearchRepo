import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'whatwg-fetch';

import Spinner from "../Components/spinner";

import '../../scss/base_styles.scss';
import '../../scss/article_styles.scss';

class SignupModal extends Component{
	constructor(props){
		super(props);
		this.state = {
			viewSignUpModal:true,
			isLoading:false,
			signUpError:"",			
			signUpUsername:"",
			signUpEmail:'',
			signUpPassword:'',			
			signUpPasswordConfirm:'',			
			token:''
		}
		this.hideModal = this.hideModal.bind(this);
		this.onTextboxChangeUserName = this.onTextboxChangeUserName.bind(this);
		this.onTextboxChangeSignUpEmail = this.onTextboxChangeSignUpEmail.bind(this);
		this.onTextboxChangeSignUpPassword = this.onTextboxChangeSignUpPassword.bind(this);		
		this.onTextboxChangeSignUpPasswordConfirm = this.onTextboxChangeSignUpPasswordConfirm.bind(this);
		this.onSignUp = this.onSignUp.bind(this);
	}

	onTextboxChangeUserName(e){
		this.setState({
			signUpUsername:e.target.value
		})
	}

	onTextboxChangeSignUpEmail(e){
		this.setState({
			signUpEmail:e.target.value
		})
	}

	onTextboxChangeSignUpPassword(e){
		this.setState({
			signUpPassword:e.target.value
		})
	}

	onTextboxChangeSignUpPasswordConfirm(e){
		this.setState({
			signUpPasswordConfirm:e.target.value
		})
	}

	componentDidMount(){
		this.setState({
			isLoading:false
		})
	}

	onSignUp(){

		// grabbing the state
		var {
			signUpUsername,
			signUpEmail,
			signUpPassword,
			signUpPasswordConfirm,
			isLoading
		} = this.state		

	
		//passwords not matching scenario
		if (signUpPassword !== signUpPasswordConfirm){
			this.setState({
				isLoading:false
			})
			console.log("emails are not matching");
		}
		else {
			console.log("emails are matching");
		}	
	}

	// closing the modal on clicking Cancel
	hideModal(){
		this.setState({
			viewSignUpModal:false
		})
	}

	render(props){
		let hideModalClassName;
		let loaderClassName;
		(this.state.viewSignUpModal) ? (hideModalClassName = "modal-container") : (hideModalClassName="hidden");
		(this.state.isLoading) ? (loaderClassName = "loader-container flex-row") : (loaderClassName = "hidden ");
		return(
			<React.Fragment>
				<div className={hideModalClassName}>
					<div className="signup-modal-content flex-column">
						<div className="username-section flex-row">	
							<p className="username-subheading">User name:</p>
							<input type='text' onChange={this.onTextboxChangeUserName} value={this.state.signUpUsername} />
						</div>
						<div className="email-section flex-row">	
							<p className="email-subheading">Email:</p>
							<input type='text' onChange={this.onTextboxChangeSignUpEmail} value={this.state.signUpEmail} />
						</div>
						<div className="password-section flex-row">
							<p className="password-subheading">Password:</p>
							<input type='text' onChange={this.onTextboxChangeSignUpPassword} value={this.state.signUpPassword} />
						</div>
						<div className="confirm-password-section flex-row">
							<p className="confirm-password-subheading">Confirm password:</p>
							<input type='text' onChange={this.onTextboxChangeSignUpPasswordConfirm} value={this.state.onTextboxChangeSignUpPasswordConfirm} />
						</div>
						<div className='login-cancel-holder flex-row'>	
							<button className='close-modal-btn modal-btn' onClick={this.hideModal}>Cancel</button>
							<button className="submit-form-btn modal-btn" onClick={this.onSignUp}>Submit</button>
						</div>
						<div className={loaderClassName}>
							<Spinner />
							<p className='pleasewait-txt'>Please wait...</p>
						</div>
						<div className="error-display">
							<p className='error-txt'>{this.state.signUpError}</p>
						</div>
					</div>
				</div>
			</React.Fragment>
		)
	}
}

export default SignupModal;