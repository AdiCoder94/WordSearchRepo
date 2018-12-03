import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'whatwg-fetch';


import '../scss/base_styles.scss';
import '../scss/article_styles.scss';

class SignupModal extends Component{
	constructor(props){
		super(props);
		this.state = {
			viewSignUpModal:true,
			isLoading:true,
			signUpError:"",			
			signUpUsername:"",
			signUpEmail:'',
			signUpPassword:'',			
			token:''
		}
		this.hideModal = this.hideModal.bind(this);
		this.onTextboxChangeUserName = this.onTextboxChangeUserName.bind(this);
		this.onTextboxChangeSignUpEmail = this.onTextboxChangeSignUpEmail.bind(this);
		this.onTextboxChangeSignUpPassword = this.onTextboxChangeSignUpPassword.bind(this);		
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

	componentDidUpdate(){
		console.log("User name:" + this.state.signUpUsername +" "+ "Email:" + this.state.signUpEmail + " " + "Password:" + this.state.signUpPassword);
	}
	

	onSignUp(){
		// grabbing the state
		const {
			signUpUsername,
			signUpEmail,
			signUpPassword
		} = this.state;

		this.setState({
			isLoading:true
		});

		//post request to backend
		fetch('api/account/signup',{
			method: "POST",
			headers: {
				"Content-type" : "application/json"
			},
			body:JSON.stringify({
				username : signUpUsername,
				email : signUpEmail,
				password : signUpPassword
			}),
		})
		// .then(res =>  JSON.parse(res))	
		.then(res => res.text())
		.then(text => console.log(text))
		/*.then(json => {
			console.log("json",json);
			if(json.success){
				this.setState({
					signUpError : json.message,
					isLoading : false,
					signUpEmail : "",
					signUpPassword : ""
				})
			}	
			else{
				this.setState({
					signUpError : json.message,
					isLoading : false
				})
			}
		})*/
	}

	// closing the modal on clicking Cancel
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
							<input type='text' onChange={this.onTextboxChangeUserName} />
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
							<input type='text' onChange={this.onTextboxChangeSignUpPassword} />
						</div>
						<div className='login-cancel-holder flex-row'>	
							<button className='close-modal-btn modal-btn' onClick={this.hideModal}>Cancel</button>
							<button className="submit-form-btn modal-btn" onClick={this.onSignUp}>Submit</button>
						</div>
					</div>
				</div>
			</React.Fragment>
		)
	}
}

export default SignupModal;