import React, { Component } from 'react';

import '../scss/base_styles.scss';
import '../scss/header_styles.scss';
import LoginForm from './LoginForm'; 


class Header extends Component{
	constructor(props){
		super(props);
		this.state={
			isLoggedIn:false
		};
		this.handleClick=this.handleClick.bind(this);
	}

	handleClick(){
		this.setState(state=>({
			isLoggedIn:!state.isLoggedIn
		}));
	}

	render(){
		let loginStatus=this.state.isLoggedIn;
		(loginStatus?(console.log("your logged in")):(console.log("your not logged in")))
		let message;
		if(loginStatus===true){
			message=<LoginForm />
		}
		else{
			message=(<React.Fragment></React.Fragment>)
		}
  		return(
		    <React.Fragment>
		      <div className="site-header flex-row">
		        <h2 className='site-name'>Word dictionary</h2>
		        {message}
		        <input type='button' value={this.state.isLoggedIn.toString()} className='login-btn' onClick={this.handleClick} />
		      </div>
		    </React.Fragment>
    	)
   }
} 

export default Header;