import React, { Component } from 'react';

import '../scss/base_styles.scss';
import '../scss/header_styles.scss';

import LoginModal from './LoginModal';

class Header extends Component{
	constructor(props){
		super(props);
		this.state = {
			viewLoginModal:false
		}
		this.showLoginModal = this.showLoginModal.bind(this);
	}

	showLoginModal(){
		this.setState(state => ({
				viewLoginModal:!this.state.viewLoginModal
			})
		)		
		console.log(this.state.viewLoginModal);
	}

	render(){
		let Modal;
		this.state.viewLoginModal ? (Modal = <LoginModal />) : (Modal = <React.Fragment />);
  		return(
		    <React.Fragment>
		      <div className="site-header flex-row">
		        <h2 className='site-name'>Word search</h2>
		        <button className='login-btn' onClick={this.showLoginModal}>Login</button>	        
		      </div>
	      	  {Modal}
		    </React.Fragment>
    	)
   }
} 

export default Header;