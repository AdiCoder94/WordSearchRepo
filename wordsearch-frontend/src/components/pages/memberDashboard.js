import React, { Component } from 'react';
import { connect } from 'react-redux';

import ViewAllWordsComponent from '../Components/viewAllWordsComponent'
import EnterNewWord from '../Components/enterNewWordComponent'
import MemberHeader from '../Components/memberHeader';
import WordsByLetterListComponent from '../Components/wordByLetterListComponent';

import * as authActions from '../../redux_components/actions/authActions/authActionCreator';

import '../../scss/base_styles.scss';
import '../../scss/header_styles.scss';


class MemberDashboard extends Component{
	constructor(){
		super();
		this.state = { viewDatabase: true	}
		this.getBottomComponent = this.getBottomComponent.bind(this)
	}
	
	componentDidMount(){
		let token = sessionStorage.getItem('token')
		this.props.getCurrentUser(token)
	}
	
	getBottomComponent(data){	this.setState({ viewDatabase: data }) }
	
	render(){
		let username, bottomComponent;
		let { getCurrentUserState } = this.props;
		(getCurrentUserState.user !== null) ? username = getCurrentUserState.user.username : username = null;
		(this.state.viewDatabase) ? bottomComponent = <ViewAllWordsComponent /> : bottomComponent = <EnterNewWord />

		return( 
			<React.Fragment>
				<MemberHeader currentUser={username} bottomComponent={this.getBottomComponent} />
				{ bottomComponent }
			</React.Fragment>)}}

const mapStateToProps = (state) => {
	return{
		getCurrentUserState: state.getCurrentUserState
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		getCurrentUser: token => dispatch(authActions.initiateGetCurrentUser(token))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(MemberDashboard)