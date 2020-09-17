import React, { Component } from 'react';
import 'whatwg-fetch';
import Spinner from "../Components/spinner";
import '../../scss/base_styles.scss';
import '../../scss/article_styles.scss';
import { frontendURL, backendURL, signupURL } from '../../config/constants';

class SignupModal extends Component{
	constructor(props){
		super(props);
		this.state = {
			viewSignUpModal:true,
			isLoading:false,
			signUpError:'',			
			signUpUsername:'',
			signUpEmail:'',
			signUpPassword:'',			
			signUpPasswordConfirm:'',			
			inputErrorDisplay: false,
			inputErrorMsg: '' }

		this.hideModal = this.hideModal.bind(this);
		this.onTextboxChangeUserName = this.onTextboxChangeUserName.bind(this);
		this.onTextboxChangeSignUpEmail = this.onTextboxChangeSignUpEmail.bind(this);
		this.onTextboxChangeSignUpPassword = this.onTextboxChangeSignUpPassword.bind(this);		
		this.onTextboxChangeSignUpPasswordConfirm = this.onTextboxChangeSignUpPasswordConfirm.bind(this);
		this.onSignUp = this.onSignUp.bind(this);
		this.getStateArr = this.getStateArr.bind(this)	}

	onTextboxChangeUserName(e){
		this.setState({ signUpUsername:e.target.value })}

	onTextboxChangeSignUpEmail(e){
		this.setState({ signUpEmail:e.target.value })}

	onTextboxChangeSignUpPassword(e){
		this.setState({ signUpPassword:e.target.value	})}

	onTextboxChangeSignUpPasswordConfirm(e){
		this.setState({ signUpPasswordConfirm:e.target.value } )}

	getStateArr(){
		let stateArr = [ 
			this.state.signUpUsername,
			this.state.signUpEmail,
			this.state.signUpPassword,
			this.state.signUpPasswordConfirm ]
			console.log(stateArr)}	
	
	onSignUp(){
		this.setState({ isLoading: !this.state.isLoading });	

		// grabbing the state
		var {
			signUpUsername,
			signUpEmail,
			signUpPassword,
			signUpPasswordConfirm,
		} = this.state	

		const checkEmptyField = () => {
			// empty field scenario
			if(!signUpUsername || !signUpEmail || !signUpPassword || !signUpPasswordConfirm){ 
				this.setState({ 
					inputErrorDisplay: true,
					inputErrorMsg: 'All fields are neccessary.',
					isLoading: false })
					return false }	
			else return true;}							 
					
		const matchPassword = () => {	
			//password not matching scenario
			if(signUpPassword !== signUpPasswordConfirm) {
				this.setState({ 
					inputErrorDisplay: true,
					isLoading: false,
					inputErrorMsg: 'Passwords did not match.'})
					return false }
			else return true;}		
		
		var match = matchPassword()
		var check = checkEmptyField()
		
		if(check && match){		
			//submitting data for registration
			fetch(`${backendURL}${signupURL}`, {
				method: 'POST',
				headers:{ 
					'Access-Control-Allow-Origin': `${frontendURL}`,
					'Content-Type': 'application/json'},
				body: JSON.stringify({
					username: signUpUsername,
					email: signUpEmail,
					password: signUpPassword,
					confirmPassword: signUpPasswordConfirm } )}
					
					)
			.then(res => res.json())
			.then(json => {
				(json.success) ? 
					this.setState({
						signUpEmail: '',
						signUpUsername: '',
						signUpPassword: '',
						signUpPasswordConfirm: '',
						isLoading: false,
						inputErrorDisplay: true,
						inputErrorMsg: 'You successfully signed up!'
					}, () => setTimeout(this.hideModal, 500)) :
					this.setState({
						isLoading: false,
						inputErrorDisplay: true,
						inputErrorMsg: json.err_msg	})
			})
		}}

	// closing the modal on clicking Cancel
	hideModal(){
		this.setState({ viewSignUpModal:false }, () => {
			this.props.headerBtnActive(this.state.viewSignUpModal)
			this.props.isModalClosed(this.state.viewSignUpModal)})}

	render(){
		let hideModalClassName, loaderClassName, messageClassName;
		(this.state.viewSignUpModal) ? (hideModalClassName = 'modal-container') : (hideModalClassName='hidden');
		(this.state.isLoading) ? (loaderClassName = 'loader-container flex-row') : (loaderClassName = 'hidden');
		(this.state.inputErrorDisplay) ? (messageClassName='message-container') : (messageClassName = 'hidden');

		var {
			signUpUsername,
			signUpEmail,
			signUpPassword,
			signUpPasswordConfirm,
			inputErrorMsg	} = this.state

		return(
			<React.Fragment>
				<div className={hideModalClassName}>
					<div className="signup-modal-content flex-column">
						<div className="username-section flex-row">	
							<p className="username-subheading">User name:</p>
							<input type='text' onChange={this.onTextboxChangeUserName} value={signUpUsername} /></div>
						<div className="email-section flex-row">	
							<p className="email-subheading">Email:</p>
							<input type='text' onChange={this.onTextboxChangeSignUpEmail} value={signUpEmail} /></div>
						<div className="password-section flex-row">
							<p className="password-subheading">Password:</p>
							<input type='password' onChange={this.onTextboxChangeSignUpPassword} value={signUpPassword} /></div>
						<div className="confirm-password-section flex-row">
							<p className="confirm-password-subheading">Confirm password:</p>
							<input type='password' onChange={this.onTextboxChangeSignUpPasswordConfirm} value={signUpPasswordConfirm} /></div>
						<div className='login-cancel-holder flex-row'>	
							<button className='close-modal-btn modal-btn' onClick={this.hideModal}>Cancel</button>
							<button className="submit-form-btn modal-btn" onClick={this.onSignUp}>Submit</button></div>
						<div className={loaderClassName}>
							<Spinner />
							<p className='pleasewait-txt'>Please wait...</p></div>
						<p className={ messageClassName }>{inputErrorMsg}</p>
						<div className="error-display">
							<p className='error-txt'>{this.state.signUpError}</p></div></div></div>	</React.Fragment>)}}

export default SignupModal;

// signUpStateLog()
// 				console.log(json);
// 				(json.success) ?
// 					this.setState({
// 						isLoading: false,
// 						inputErrorDisplay: true,
// 						inputErrorMsg: json.message,
// 						signUpEmail: 'fskffjflsj',
// 						signUpUsername: '',
// 						signUpPassword: '',
// 						signUpPasswordConfirm: ''}) :
// 					this.setState({ 
// 						isLoading: false,
// 						inputErrorMsg: json.message,
// 						inputErrorDisplay: true} )