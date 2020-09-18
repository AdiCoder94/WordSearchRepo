import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as authActions from '../../redux_components/actions/authActions/authActionCreator';
import { frontendURL } from '../../config/constants';

import '../../scss/base_styles.scss';
import '../../scss/header_styles.scss';

class MemberHeader extends Component{

	componentDidUpdate(){
		if(this.props.signoutState.isSuccess){
			window.sessionStorage.removeItem('token')
			window.location.href = `${frontendURL}`
		}
	}

	render(){
		const token = window.sessionStorage.getItem('token')
		let { signoutState } = this.props

		return(
			<React.Fragment>	
				<div className="site-header flex-row">
					<h2 className='site-name'>Word search</h2>
					<span className='search-word-text'>Search words:</span><input className='search-newword-textfield'></input>
					<Link to="/memberdashboard/new_entry"><p className='enter-newword-link'>Enter new word</p></Link>
					<Link to="/memberdashboard/viewallwords"><p className='view-all-words-link'>View database</p></Link>
					<div className="btn-holder">          
					<button className='login-btn site-btn' onClick={() => this.props.onSignout(token)} disabled={signoutState.isFetching}>Logout</button></div></div></React.Fragment>)}}

const mapStateToProps = (state) => {
 return {
	 signoutState: state.signoutState
 }
}

const mapDispatchToProps = (dispatch) => {
 return {
	 onSignout: token => dispatch(authActions.initiateSignout(token))
 }
}	

export default connect(mapStateToProps, mapDispatchToProps)(MemberHeader);