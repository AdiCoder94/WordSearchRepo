import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { backendURL, alphabetsArray, viewWordsByLetterURL } from '../../config/constants';
import MemberHeader from '../Components/memberHeader';
import Spinner from "../Components/spinner";
	
let viewAllWordsComponent, viewAllWordsContent;

function alphabetOrder(inputArray, char){
	let alphabetArr = []

	for(var i = 0; i < inputArray.length; i++) {
		if(inputArray[i].charAt(0) === char){
			alphabetArr.push(inputArray[i])}}	
	return alphabetArr }

function ViewAllWords(){
	const [wordArray, setWordArray] = useState([])
	const [triggerComponent, setTriggerComponent] = useState(false)

	useEffect(() => {
		fetch(`${backendURL}api/word/allwords`, 
			{	method: 'GET' })
			.then(res => res.json())
			.then(json => setWordArray(json))
			.then(() => setTriggerComponent(true))
			.catch(err => console.log(err))}, [triggerComponent])
	
	useEffect(() => {	
		let wordList = wordArray.map(word => word.enteredWord )
		let orderWordList = (char) => alphabetOrder(wordList.sort(), char)

		if(wordArray.length !== 0){
			viewAllWordsComponent = (
				<React.Fragment>
					<h2 className='wordcount_header'>Total words:{wordArray.length}</h2>
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
											return <li key={word._id}>{word}</li>})}</ul></div>)})}</div></React.Fragment>)
		}	else viewAllWordsComponent = <p className='no_word_msg'>No words in database</p>}, [wordArray])

	useEffect(() => {
		if(!triggerComponent){
			viewAllWordsContent = <React.Fragment>
				<div className='loader-container flex-row'>
				<Spinner />
				<p className='pleasewait-txt'>Please wait...</p></div></React.Fragment>
		} else viewAllWordsContent = viewAllWordsComponent
	}, [triggerComponent])
	
	return (
		<React.Fragment>
			<MemberHeader />
			<div className="site-article-container">
				{ viewAllWordsContent }</div></React.Fragment>)}

export default ViewAllWords;