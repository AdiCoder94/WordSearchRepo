import React, { Component } from 'react';

import '../scss/base_styles.scss';
import '../scss/header_styles.scss';
import LoginForm from './LoginForm'; 


class Header extends Component{
	constructor(props){
		super(props);
	}

	render(){
  		return(
		    <React.Fragment>
		      <div className="site-header flex-row">
		        <h2 className='site-name'>Word dictionary</h2>
		        <LoginForm />		        
		      </div>
		    </React.Fragment>
    	)
   }
} 

export default Header;