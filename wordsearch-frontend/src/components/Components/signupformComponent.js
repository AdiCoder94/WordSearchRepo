import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as authActions from '../../redux_components/actions/authActions/authActionCreator';

import Spinner from "./spinner";
import '../../scss/base_styles.scss';
import '../../scss/article_styles.scss';

class SignupFormComponent extends Component{
	constructor(){
		super();
		this.state = {
			viewSignUpModal:true,
			signUpError:'',			
			signUpUsername:'',
			signUpEmail:'',
			signUpPassword:'',			
			signUpPasswordConfirm:'' }

		this.onTextboxChangeUserName = this.onTextboxChangeUserName.bind(this);
		this.onTextboxChangeSignUpEmail = this.onTextboxChangeSignUpEmail.bind(this);
		this.onTextboxChangeSignUpPassword = this.onTextboxChangeSignUpPassword.bind(this);		
		this.onTextboxChangeSignUpPasswordConfirm = this.onTextboxChangeSignUpPasswordConfirm.bind(this);
	}

	onTextboxChangeUserName(e){
		this.setState({ signUpUsername:e.target.value })}

	onTextboxChangeSignUpEmail(e){
		this.setState({ signUpEmail:e.target.value })}

	onTextboxChangeSignUpPassword(e){
		this.setState({ signUpPassword:e.target.value	})}

	onTextboxChangeSignUpPasswordConfirm(e){
		this.setState({ signUpPasswordConfirm:e.target.value } )}
	
	componentDidUpdate(){
		if(this.props.signupState.isSuccess && !this.props.signupState.isFetching){ this.hideModal() }
	}		

	render(){
		let loaderClassName, messageClassName;
		(this.props.signupState.isFetching) ? (loaderClassName = 'loader-container flex-row') : (loaderClassName = 'hidden');
		(this.props.signupState.isErr) ? (messageClassName='message-container') : (messageClassName = 'hidden');

		var {
			signUpUsername,
			signUpEmail,
			signUpPassword,
			signUpPasswordConfirm } = this.state

		const userDetail = { signUpUsername, signUpEmail, signUpPassword, signUpPasswordConfirm }	
		return(
			<React.Fragment>
				<p className='signupform-heading'>Sign up</p>
				<hr/>
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
				<div className='signup-holder'>
						<button className="submit-form-btn modal-btn" onClick={() => this.props.onSignUp(userDetail)}>Submit</button></div>
				<p className={messageClassName}>{this.props.signupState.err}</p>
				<div className={loaderClassName}>
					<Spinner />
					<p className='pleasewait-txt'>Please wait...</p></div></React.Fragment>)}}

const mapStateToProps = (state) => {
	return {
		signupState: state.signupState
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSignUp: userDetail => dispatch(authActions.initiateSignup(userDetail))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupFormComponent);
