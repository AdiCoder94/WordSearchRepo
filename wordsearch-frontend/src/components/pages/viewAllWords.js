import React, { useEffect, useState } from 'react';

// import MemberDashboard from '../Components/memberHeader';
import { backendURL, alphabetsArray } from '../../config/constants';
import MemberHeader from '../Components/memberHeader';
	
let viewAllWordsComponent

function alphabetOrder(inputArray, char){
	let alphabetArr = []

	for(var i = 0; i < inputArray.length; i++) {
		if(inputArray[i].charAt(0) === char){
			alphabetArr.push(inputArray[i])}

		// if(i === inputArray.length){
		// 	tempArr = alphabetArr.slice()
		// 	nextLetter.push(tempArr)
		// 	i++;}		
	}	
	console.log('next', alphabetArr)
	return alphabetArr}

function ViewAllWords(){
	const [wordArray, setWordArray] = useState([])
	const [triggerComponent, setTriggerComponent] = useState(false)

	useEffect(() => {
		fetch(`${backendURL}api/word/allwords`, 
		{	method: 'GET' })
		.then(res => res.json())
		.then(json => setWordArray(json))
		.catch(err => console.log(err))}, [])
	
	useEffect(() => {	
		let wordList = wordArray.map(word => word.enteredWord )
		let orderWordList = (char) => alphabetOrder(wordList.sort(), char)

		if(wordArray.length !== 0){
			setTriggerComponent(true)
			viewAllWordsComponent = (
				<React.Fragment>
					<div className='view_word_gridcontainer'>
						{ alphabetsArray.map((char) => {
							return (
								<div className='view_word_griditem'>
									<div className='view_word_grid-header flex-row'>
										<h2>{char}</h2>
										<p>({orderWordList(char).length})</p></div>
									<hr />
									{orderWordList(char).map((word)=>{
										return (
											<li>{word}</li>)})}</div>)})}</div></React.Fragment>)
		}	else viewAllWordsComponent = <p className='no_word_msg'>No words in database</p>	
	}, [wordArray, triggerComponent])
	
	return (
		<React.Fragment>
			<MemberHeader />
			<div className="site-article-container">
				<h2 className='wordcount_header'>Total word: {wordArray.length}</h2>
				{ viewAllWordsComponent }
			</div>
		</React.Fragment>
	)}

export default ViewAllWords;
