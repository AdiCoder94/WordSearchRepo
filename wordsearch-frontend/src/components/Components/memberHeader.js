import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as authActions from '../../redux_components/actions/authActions/authActionCreator';
import { frontendURL } from '../../config/constants';

import UserProfileComponent from './userProfileComponent'

import '../../scss/base_styles.scss';
import '../../scss/header_styles.scss';

class MemberHeader extends Component{
	constructor(){
		super();
		this.state = { 
			viewDatabase: true,
			toggleColour: true }
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
			this.setState({ 
				viewDatabase: false,
				toggleColour: false }, () => { this.props.bottomComponent(this.state.viewDatabase) }) }
		else return null
	}
			
	triggerViewDatabase(){
		if(!this.state.viewDatabase){
			this.setState({ 
				viewDatabase: true,
				toggleColour: true }, () => {	this.props.bottomComponent(this.state.viewDatabase) }) }
		else return null
	}

	render(){
		const token = window.sessionStorage.getItem('token')
		let { toggleColour } = this.state

 		return(
			<div className='site-header flex-row'>
				<h2 className='site-name'>Word search</h2>
				<div className='member-header__tab-container flex-row'>
					<div className={`member-tabcontainer__enterwordtab ${toggleColour ? "" : "active"}`} onClick={this.triggerEnterNewWord}>Add word to database</div>
					<div className={`member-tabcontainer__viewdatabasetab ${!toggleColour ? "" : "active"}`} onClick={this.triggerViewDatabase}>View your database</div>
				</div>
				<UserProfileComponent /></div>)}}

const mapStateToProps = (state) => {
 return { signoutState: state.signoutState }}

const mapDispatchToProps = (dispatch) => {
 return { onSignout: token => dispatch(authActions.initiateSignout(token)) }}	

export default connect(mapStateToProps, mapDispatchToProps)(MemberHeader);