import React, { Component } from 'react';

import SigninFormComponent from '../Components/signinformComponent'

import '../../scss/base_styles.scss';
import '../../scss/header_styles.scss';

class Header extends Component{
	constructor(){
		super();
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
		this.setState(() =>({	viewLoginModal: true }))
	}

	showSignupModal(){
		this.setState({ headerUnclickable: true })
		this.setState(() => ({ viewSignupModal: true }))
	}

	activateHeader(e){
		this.setState({	headerUnclickable: e })
	}	
			
	closeModal(e){
		this.setState({
			viewLoginModal: e,
			viewSignupModal:e })}		

	render(){
		return(
			<React.Fragment>
				<div className="site-header flex-row">
					<h2 className='site-name'>Word search</h2>
					<SigninFormComponent /></div></React.Fragment>)}} 

export default Header;