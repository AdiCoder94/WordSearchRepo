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
		});
	}

	onSignUp(){
		// grabbing the state
		var {
			signUpUsername,
			signUpEmail,
			signUpPassword,
			signUpPasswordConfirm
		} = this.state;

		this.setState({
			isLoading:true
		});
		
		//passwords not matching scenario
		if(signUpPassword !== signUpPasswordConfirm){
			this.setState({
				isLoading:false
			});
			console.log("emails are not matching");
		}
		else {
			console.log("emails are matching");
		}	

		//post request to backend
		fetch('api/account/signup',{
			method: "POST",
			headers: {
				"Content" : "application/json"
			},
			body:JSON.stringify({
				username : signUpUsername,
				email : signUpEmail,
				password : signUpPassword
			})
		})
		.then(res => res.json())
		.then(json => {
			console.log(json);
			if(json.success){
				this.setState({
					signUpError:json.message,
					signUpEmail:"",
					signUpPassword:"",
					isLoading:false
				});
				console.log( "Success Email: " + this.state.signUpEmail +" Password " + this.state.signUpPassword + this.state.signUpError)
			}
			else{
				this.setState({
					isLoading:false,
					signUpError:json.message
				});	
				console.log( " Fail Email: " + this.state.signUpEmail +" Password " + this.state.signUpPassword + this.state.signUpError )
			}
		})	
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
		var {
			viewSignUpModal,
			isLoading,
			signUpError,			
			signUpUsername,
			signUpEmail,
			signUpPassword,	
			signUpPasswordConfirm,		
			token	
		} = this.state;
		return(
			<React.Fragment>
				<div className={hideModalClassName}>
					<div className="signup-modal-content flex-column">
						<div className="username-section flex-row">	
							<p className="username-subheading">User name:</p>
							<input type='text' onChange={this.onTextboxChangeUserName}  />
						</div>
						<div className="email-section flex-row">	
							<p className="email-subheading">Email:</p>
							<input type='text' onChange={this.onTextboxChangeSignUpEmail} />
						</div>
						<div className="password-section flex-row">
							<p className="password-subheading">Password:</p>
							<input type='text' onChange={this.onTextboxChangeSignUpPassword} />
						</div>
						<div className="confirm-password-section flex-row">
							<p className="confirm-password-subheading">Confirm password:</p>
							<input type='text' onChange={this.onTextboxChangeSignUpPasswordConfirm} />
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