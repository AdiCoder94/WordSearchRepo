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
			viewSignupModal:false,
			headerUnclickable: false	}
		this.showLoginModal = this.showLoginModal.bind(this);
		this.showSignupModal = this.showSignupModal.bind(this);	
		this.activateHeader = this.activateHeader.bind(this);
		this.closeModal = this.closeModal.bind(this)}

	showLoginModal(){
		this.setState({ headerUnclickable: true })
		this.setState(() =>({
			viewLoginModal: true})
		)}

	showSignupModal(){
		this.setState({ headerUnclickable: true })
		this.setState(() => ({
			viewSignupModal: true} ))}

	activateHeader(e){
		this.setState({	headerUnclickable: e	})}	
			
	closeModal(e){
		this.setState({
			viewLoginModal: e,
			viewSignupModal:e })}		

	render(){
		let LogInModal, SignupModal;
		this.state.viewLoginModal ? (LogInModal = <LoginModal  headerBtnActive={this.activateHeader} isModalClosed={this.closeModal} />) : (LogInModal = <React.Fragment />);
		this.state.viewSignupModal ? (SignupModal = <SignUpModal headerBtnActive={this.activateHeader} isModalClosed={this.closeModal} />) : (SignupModal = <React.Fragment />);
  		return(
		    <React.Fragment>
		      <div className="site-header flex-row">
		        <h2 className='site-name'>Word search</h2>
		        <div className="btn-holder">
			        <button className='signup-btn site-btn' onClick={this.showSignupModal} disabled={this.state.headerUnclickable}>Sign up</button>	        
			        <button className='login-btn site-btn' onClick={this.showLoginModal} disabled={this.state.headerUnclickable}>Login</button></div></div>
		      	{SignupModal}
	      	  {LogInModal}</React.Fragment>)}} 

export default Header;