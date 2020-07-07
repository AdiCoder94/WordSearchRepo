import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import '../../scss/base_styles.scss';
import '../../scss/header_styles.scss';

class MemberHeader extends Component{
	render(){
		return(
			<React.Fragment>	
				<div className="site-header flex-row">
					<h2 className='site-name'>Word search</h2>
					<span className='search-word-text'>Search words:</span><input className='search-newword-textfield'></input>
					<Link to="/memberdashboard/new_entry"><p className='enter-newword-link'>Enter new word</p></Link>
					<Link to="/memberdashboard/viewallwords"><p className='view-all-words-link'>View database</p></Link>
					<div className="btn-holder">          
						<button className='login-btn site-btn'>Logout</button></div></div></React.Fragment>)}}

export default MemberHeader;