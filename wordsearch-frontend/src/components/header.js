import React, { Component } from 'react';

import '../scss/base_styles.scss';
import '../scss/header_styles.scss';

import LoginModal from './LoginModal';
import SignUpModal from './SignupModal';

class Header extends Component{
	constructor(props){
		super(props);
		this.state = {
			viewLoginModal:false,
			viewSignupModal:false
		}
		this.showLoginModal = this.showLoginModal.bind(this);
		this.showSignupModal = this.showSignupModal.bind(this);
	}

	showLoginModal(){
		this.setState(state => ({
				viewLoginModal:!this.state.viewLoginModal
			})
		)		
		console.log(this.state.viewLoginModal);
	}

	showSignupModal(){
		this.setState(state => ({
				viewSignupModal:!this.state.viewSignupModal
			})
		)		
		console.log(this.state.viewLoginModal);
	}

	render(){
		let LogInModal;
		let SignUpModal;
		this.state.viewLoginModal ? (LogInModal = <LoginModal />) : (LogInModal = <React.Fragment />);
		this.state.viewSignupModal ? (SignUpModal = <LoginModal />) : (SignUpModal = <React.Fragment />);
  		return(
		    <React.Fragment>
		      <div className="site-header flex-row">
		        <h2 className='site-name'>Word search</h2>
		        <button className='signup-btn' onClick={this.showSignupModal}>Sign up</button>	        
		        <button className='login-btn' onClick={this.showLoginModal}>Login</button>	        
		      </div>
	      	  {LogInModal}
	      	  {SignUpModal}
		    </React.Fragment>
    	)
   }
} 

export default Header;