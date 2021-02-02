import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as authActions from '../../redux_components/actions/authActions/authActionCreator';
import { frontendURL, memberDashboardURL } from '../../config/constants';

import '../../scss/base_styles.scss';
import '../../scss/article_styles.scss';
import Spinner from "../Components/spinner";

function SignInLoadingComponent(){
	console.log('loading')
	return(
		<div className='loader-container'>
			{/* <Spinner /> */}
			<p className='pleasewait-txt'>Please wait...</p>
			
			</div>)
}

function ErrMessageComponent(props){
	return(
		<p className='message-container'>{props.msg}</p>)
}

class SigninFormComponent extends Component{
	constructor(){
		super();
		this.state = {
			viewLoginModal:true,
			signUpEmail:'',
			logInPassword:'', 
			clickedHeaderBtn: false,
			inputErrorDisplay: false,
		}
		this.onTextboxChangeUserName = this.onTextboxChangeUserName.bind(this);
		this.onTextboxChangeLogInPassword = this.onTextboxChangeLogInPassword.bind(this);	}

	onTextboxChangeUserName(event){
		this.setState({	signUpEmail:event.target.value	})}

	onTextboxChangeLogInPassword(event){
    this.setState({	logInPassword:event.target.value })}
    
	componentDidUpdate(){
		if(this.props.signinState.isAuthenticated){
			window.sessionStorage.setItem('token', this.props.signinState.token)
			window.location.href = `${frontendURL}${memberDashboardURL}`
		}
		if(this.props.signinState.isFetching){
			console.log('hello')
		}
	}		

	render(){
		let hideModalClassName, statusDisplayComponent;
		(this.state.viewLoginModal) ? (hideModalClassName = "modal-container") : (hideModalClassName="hidden");
		// (this.props.signinState.isFetching) ? (loaderClassName = 'loader-container flex-row') : (loaderClassName = 'hidden');
		// (this.props.signinState.isErr) ? (messageClassName='message-container') : (messageClassName = 'hidden');

		(this.props.signinState.isFetching) ? (statusDisplayComponent = <SignInLoadingComponent />) : (statusDisplayComponent = <React.Fragment />);
		(this.props.signinState.isErr) ? (statusDisplayComponent = <ErrMessageComponent msg={this.props.signinState.err} />) : (statusDisplayComponent = <React.Fragment />);
	
		var { signUpEmail, logInPassword } = this.state
		const userCred = { signUpEmail, logInPassword }
		
		return(
			<React.Fragment>
					<div className="userprofile-console flex-column">
						<div className="username-section flex-row">	
							<p className="username-subheading">Email:</p>
							<input type='text' value={signUpEmail} onChange={this.onTextboxChangeUserName} /></div>
						<div className="password-section flex-row">
							<p className="password-subheading">Password:</p>
							<input type='password' value={logInPassword} onChange={this.onTextboxChangeLogInPassword} /></div>
						{/* <div className='signin-holder'>	
							<div className='requeststatus-display flex-column'>
								<p className={messageClassName}>{this.props.signinState.err}</p>
								<div className={loaderClassName}>
									<Spinner />
								<p className='pleasewait-txt'>Please wait...</p></div>
							</div>
 							<button className="signin-btn modal-btn" onClick={() => this.props.onSignIn(userCred)}>Sign In</button>

						



						 </div> */}
						 <div className='signin-holder flex-row'>
								{statusDisplayComponent}
						 		<button className="signin-btn modal-btn" onClick={() => this.props.onSignIn(userCred)}>Sign In</button>
						 </div>
						 
						 
						 </div></React.Fragment>)}}

const mapStateToProps = (state) => {
	return {
		signinState: state.signinState
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		// not understood bindActionCreator
		// onSignIn: (userCred) => (bindActionCreators(authActions.requestSignin(userCred), dispatch))
		onSignIn: userCred => dispatch(authActions.initiateSignin(userCred))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SigninFormComponent);