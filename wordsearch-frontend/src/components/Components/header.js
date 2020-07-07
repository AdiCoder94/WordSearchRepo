import React, { Component } from 'react';

import '../../scss/base_styles.scss';
import '../../scss/header_styles.scss';

import LoginModal from '../Modals/LoginModal';
import SignUpModal from '../Modals/SignupModal';

class Header extends Component{
	constructor(props){
		super(props);
		this.state = {
			viewLoginModal:false,
			viewSignupModal:false	}
		this.showLoginModal = this.showLoginModal.bind(this);
		this.showSignupModal = this.showSignupModal.bind(this);	}

	showLoginModal(){
		if((this.state.viewSignupModal === true) && (this.state.viewLoginModal === false)){
			this.setState(state => ({
					viewLoginModal:!this.state.viewLoginModal,
					viewSignupModal:false	}))}		
		else this.setState(state =>({
			viewLoginModal:!this.state.viewLoginModal} ))}

	showSignupModal(){
		if((this.state.viewLoginModal === true) && (this.state.viewSignupModal === false)){
			this.setState(state => ({
					viewSignupModal:!this.state.viewSignupModal,
					viewLoginModal:false} ))}
		else this.setState(state => ({
			viewSignupModal:!this.state.viewSignupModal} ))}

	render(){
		let LogInModal;
		let SignupModal;
		this.state.viewLoginModal ? (LogInModal = <LoginModal />) : (LogInModal = <React.Fragment />);
		this.state.viewSignupModal ? (SignupModal = <SignUpModal />) : (SignupModal = <React.Fragment />);
  		return(
		    <React.Fragment>
		      <div className="site-header flex-row">
		        <h2 className='site-name'>Word search</h2>
		        <div className="btn-holder">
			        <button className='signup-btn site-btn' onClick={this.showSignupModal}>Sign up</button>	        
			        <button className='login-btn site-btn' onClick={this.showLoginModal}>Login</button></div></div>
		      	{SignupModal}
	      	  {LogInModal}</React.Fragment>)}} 

export default Header;