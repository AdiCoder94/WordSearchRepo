import React, { Component } from 'react';
import '../../scss/base_styles.scss';
import '../../scss/article_styles.scss';
import Spinner from "../Components/spinner";
import { frontendURL, backendURL, memberDashboardURL, signinURL } from '../../config/constants';

class LoginModal extends Component{
	constructor(props){
		super(props);
		this.state = {
			viewLoginModal:true,
			isLoading:false,
			logInError:"",
			signUpEmail:'',
			logInPassword:'', 
			token: '' ,
			clickedHeaderBtn: false,
			inputErrorDisplay: false,
			inputErrorMsg: ''}
		this.hideModal = this.hideModal.bind(this);
		this.onTextboxChangeUserName = this.onTextboxChangeUserName.bind(this);
		this.onTextboxChangeLogInPassword = this.onTextboxChangeLogInPassword.bind(this);
		this.onSignIn = this.onSignIn.bind(this);	}

	onTextboxChangeUserName(e){
		this.setState({
			signUpEmail:e.target.value	})}

	onTextboxChangeLogInPassword(e){
		this.setState({
			logInPassword:e.target.value })}

	onSignIn(){
		this.setState({ isLoading: !this.state.isLoading });	

		// grab state
		var {
			signUpEmail,
			logInPassword } = this.state;

		const checkEmptyField = () => {
			// empty field scenario
			if(!signUpEmail || !logInPassword){ 
				this.setState({ 
					inputErrorDisplay: true,
					inputErrorMsg: 'All fields are neccessary.',
					isLoading: false })
					return false }	
			else return true;}	

		var check = checkEmptyField()	
		
		if(check){	
			fetch(`${backendURL}${signinURL}`, {
				method: 'POST',
				headers:{
					'Access-Control-Allow-Origin': `${frontendURL}`,
					'Content-Type': 'application/json',
					'Authorization': '' },
				body: JSON.stringify({
					email: signUpEmail,
					password: logInPassword	})})
				.then(res => res.json())
				.then(json => {
					if(json.success){
						this.setState({
							viewLoginModal: false,
							isLoading: false
						}, () => { 
							sessionStorage.setItem('token', json.header.authorization)
							window.location.href = `${frontendURL}${memberDashboardURL}` })
					}else this.setState({
						isLoading: false,
						inputErrorMsg: json.message,
						inputErrorDisplay: true	})})}}

	hideModal(){
		this.setState({ viewLoginModal:false },() => {
			this.props.headerBtnActive(this.state.viewLoginModal)
			this.props.isModalClosed(this.state.viewLoginModal) })}

	render(){
		let hideModalClassName, loaderClassName, messageClassName;
		(this.state.viewLoginModal) ? (hideModalClassName = "modal-container") : (hideModalClassName="hidden");
		(this.state.isLoading) ? (loaderClassName = 'loader-container flex-row') : (loaderClassName = 'hidden');
		(this.state.inputErrorDisplay) ? (messageClassName='message-container') : (messageClassName = 'hidden');
	
		var {
			signUpEmail,
			logInPassword,
			inputErrorMsg	} = this.state

		return(
			<React.Fragment>
				<div className={hideModalClassName}>
					<div className="modal-content flex-column">
						<div className="username-section flex-row">	
							<p className="username-subheading">Email:</p>
							<input type='text' value={signUpEmail} onChange={this.onTextboxChangeUserName} /></div>
						<div className="password-section flex-row">
							<p className="password-subheading">Password:</p>
							<input type='password' value={logInPassword} onChange={this.onTextboxChangeLogInPassword} /></div>
						<div className='login-cancel-holder flex-row'>	
							<button className='close-modal-btn modal-btn' onClick={this.hideModal}>Cancel</button>
							<button className="submit-form-btn modal-btn" onClick={this.onSignIn}>Login</button></div>
						<div className={loaderClassName}>
							<Spinner />
							<p className='pleasewait-txt'>Please wait...</p></div>	
						<p className={ messageClassName }>{inputErrorMsg}</p></div></div></React.Fragment>)}}

export default LoginModal;