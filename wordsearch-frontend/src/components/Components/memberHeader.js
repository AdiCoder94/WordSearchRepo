import React, { Component } from 'react';

import '../../scss/base_styles.scss';
import '../../scss/header_styles.scss';

class MemberHeader extends Component{
	render(){
		return(
			<React.Fragment>	
			    <div className="site-header flex-row">
		        <h2 className='site-name'>Word search</h2>
		        <div className="btn-holder">          
			        <button className='login-btn' onClick={this.showLoginModal}>Login</button> 	  
		        </div>	        
		      </div>
			</React.Fragment>
		)
	}
}

export default MemberHeader;