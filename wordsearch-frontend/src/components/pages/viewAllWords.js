import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import * as wordActions from '../../redux_components/actions/wordActions/wordActionCreator';
import { alphabetsArray, viewWordsByLetterURL } from '../../config/constants';
import MemberHeader from '../Components/memberHeader';
import Spinner from "../Components/spinner";

function alphabetOrder(inputArray, char){
	let alphabetArr = []
	for(var i = 0; i < inputArray.length; i++) {
		if(inputArray[i].charAt(0) === char){
			alphabetArr.push(inputArray[i])}
		}	
	return alphabetArr }

function ViewAllWordsComponent(props){
	if(props.isFetchedProps.isFetched){
		let { isFetchedProps } = props
		let wordList = isFetchedProps.wordsArray.words.map(word => word.enteredWord)
		let orderWordList = (char) => alphabetOrder(wordList.sort(), char)
		if(isFetchedProps.wordsArray.words.length > 0){
			return(
				<React.Fragment>
						<h2 className='wordcount_header'>Total words:{isFetchedProps.wordsArray.words.length}</h2>
						<div className='view_word_gridcontainer'>
							{ alphabetsArray.map(char => {
								return (
									<div className='view_word_griditem' key={char}>
										<div className='view_word_grid-header flex-row'>
											<Link to={`${viewWordsByLetterURL}/${char}`}><h2>{char}</h2></Link>
											<p>({orderWordList(char).length})	</p></div>
										<hr />
										<ul className='word_list'>
										{ orderWordList(char).map(word => {
												return <li key={word._id}>{word}</li>})}</ul></div>)})}</div></React.Fragment>
			)}
			return(<p className='no_word_msg'>No words in database</p>)
	} else return(
		<React.Fragment>
			<div className='loader-container flex-row'>
			<Spinner />
			<p className='pleasewait-txt'>Please wait...</p></div></React.Fragment>)
}

function ViewAllWords(){
	let dispatch = useDispatch()	
	let [triggerComponent, setTriggerComponent] = useState(false)
	let fetchWordState = useSelector(state => state.fetchWordState)

	useEffect(() => { dispatch(wordActions.initiateFetchWord()) }, [])
	
	useEffect(() => { 
		if(fetchWordState){ setTriggerComponent(true) }}, [triggerComponent, fetchWordState])
		
	return (
		<React.Fragment>
			<MemberHeader />
			<div className="site-article-container">
				<ViewAllWordsComponent isFetchedProps={fetchWordState} />
				</div></React.Fragment>) }

export default ViewAllWords;

