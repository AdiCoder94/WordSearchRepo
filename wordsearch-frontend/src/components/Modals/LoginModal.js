import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as authActions from '../../redux_components/actions/authActions/authActionCreator';

import '../../scss/base_styles.scss';
import '../../scss/article_styles.scss';
import Spinner from "../Components/spinner";

class LoginModal extends Component{
	constructor(props){
		super(props);
		this.state = {
			viewLoginModal:true,
			isLoading:false, //to be props
			signUpEmail:'',
			logInPassword:'', 
			token:'' , //to be props
			clickedHeaderBtn: false,
			inputErrorDisplay: false,
			inputErrorMsg: '' // to be props
		}
		this.hideModal = this.hideModal.bind(this);
		this.onTextboxChangeUserName = this.onTextboxChangeUserName.bind(this);
		this.onTextboxChangeLogInPassword = this.onTextboxChangeLogInPassword.bind(this);	}

	onTextboxChangeUserName(event){
		this.setState({	signUpEmail:event.target.value	})}

	onTextboxChangeLogInPassword(event){
		this.setState({	logInPassword:event.target.value })}


	hideModal(){
		this.setState({ viewLoginModal: false }, () => {
			this.props.headerBtnActive(this.state.viewLoginModal)
			this.props.isModalClosed(this.state.viewLoginModal) })}

	render(){
		let hideModalClassName, loaderClassName, messageClassName, fetchStatus;
		(this.state.viewLoginModal) ? (hideModalClassName = "modal-container") : (hideModalClassName="hidden");
		(this.state.isLoading) ? (loaderClassName = 'loader-container flex-row') : (loaderClassName = 'hidden');
		(this.state.inputErrorDisplay) ? (messageClassName='message-container') : (messageClassName = 'hidden');
		(this.props.signInState.isFetching) ? (fetchStatus = 'hello') : (fetchStatus = 'bye');
	
		var { signUpEmail, logInPassword } = this.state
		const userCred = { signUpEmail, logInPassword }

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
							<button className="submit-form-btn modal-btn" onClick={() => this.props.onSignIn(userCred)}>Login</button></div>
						<div className={loaderClassName}>
							<Spinner />
							<p className='pleasewait-txt'>Please wait...</p></div>	
						{/* <p className={ messageClassName }>{inputErrorMsg}</p> */}
						
						</div></div></React.Fragment>)}}

const mapStateToProps = (state) => {
	return {
		signInState: state.signinState
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		// not understood bindActionCreator
		// onSignIn: (userCred) => (bindActionCreators(authActions.requestSignin(userCred), dispatch))
		onSignIn: userCred => dispatch(authActions.requestSignin(userCred))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginModal);