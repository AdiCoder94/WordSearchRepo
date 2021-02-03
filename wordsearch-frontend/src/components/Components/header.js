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
	}


	render(){
		return(
			<React.Fragment>
				<div className="site-header flex-row">
					<h2 className='site-name'>Word search</h2>
					<SigninFormComponent /></div></React.Fragment>)}} 

export default Header;