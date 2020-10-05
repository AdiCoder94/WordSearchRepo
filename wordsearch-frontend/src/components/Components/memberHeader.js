import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as authActions from '../../redux_components/actions/authActions/authActionCreator';
import { frontendURL } from '../../config/constants';

import '../../scss/base_styles.scss';
import '../../scss/header_styles.scss';

class MemberHeader extends Component{
	constructor(){
		super();
		this.state = { viewDatabase: true }
		this.triggerEnterNewWord = this.triggerEnterNewWord.bind(this)
		this.triggerViewDatabase = this.triggerViewDatabase.bind(this)
	}

	componentDidUpdate(){
		if(this.props.signoutState.isSuccess){
			window.sessionStorage.removeItem('token')
			window.location.href = `${frontendURL}`
		}
	}

	triggerEnterNewWord(){
		if(this.state.viewDatabase){
			this.setState({ viewDatabase: false }, () => { this.props.bottomComponent(this.state.viewDatabase) }) }
		else return null
	}
			
	triggerViewDatabase(){
		if(!this.state.viewDatabase){
			this.setState({ viewDatabase: true }, () => {	this.props.bottomComponent(this.state.viewDatabase) }) }
		else return null
	}

	render(){
		const token = window.sessionStorage.getItem('token')
		let { signoutState, currentUser } = this.props
		return(
			<React.Fragment>	
				<div className="site-header flex-row">
					<h2 className='site-name'>Welcome, {currentUser}</h2>
					<div className='flex-row site-header-btn-holder'>
						<h4 className='enter-newword-link' onClick={this.triggerEnterNewWord}>Enter new word</h4>
						<h4 className='view-all-words-link' onClick={this.triggerViewDatabase}>View database</h4>
						<div className="btn-holder">          
						<button className='login-btn site-btn' onClick={() => this.props.onSignout(token)} disabled={signoutState.isFetching}>Logout</button></div></div></div></React.Fragment>)}}

const mapStateToProps = (state) => {
 return { signoutState: state.signoutState }}

const mapDispatchToProps = (dispatch) => {
 return { onSignout: token => dispatch(authActions.initiateSignout(token)) }}	

export default connect(mapStateToProps, mapDispatchToProps)(MemberHeader);