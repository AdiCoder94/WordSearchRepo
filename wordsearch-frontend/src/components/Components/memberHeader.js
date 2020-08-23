import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { frontendURL, backendURL, signoutURL } from '../../config/constants';

import '../../scss/base_styles.scss';
import '../../scss/header_styles.scss';

class MemberHeader extends Component{
	constructor(){
		super();
		this.state = { doLogout: false }
		this.logout = this.logout.bind(this); }

	logout(){
		let token = sessionStorage.getItem('token')
		fetch(`${backendURL}${signoutURL}`, {
			method: 'POST',
			headers:{
				'Access-Control-Allow-Origin': `${frontendURL}`,
				'Content-Type': 'application/json',
				'Autherization': token },
			body: JSON.stringify({ shouldLogout: this.state.doLogout })})
		.then(res => res.json())
		.then(json => {
			if(json.success){
				window.location.href = `${frontendURL}` }})
		.catch(err => console.log(err))}

	render(){
		return(
			<React.Fragment>	
				<div className="site-header flex-row">
					<h2 className='site-name'>Word search</h2>
					<span className='search-word-text'>Search words:</span><input className='search-newword-textfield'></input>
					<Link to="/memberdashboard/new_entry"><p className='enter-newword-link'>Enter new word</p></Link>
					<Link to="/memberdashboard/viewallwords"><p className='view-all-words-link'>View database</p></Link>
					<div className="btn-holder">          
						<button className='login-btn site-btn' onClick={this.logout}>Logout</button></div></div></React.Fragment>)}}

export default MemberHeader;