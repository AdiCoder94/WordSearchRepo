import React,{ useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as wordActions from '../../redux_components/actions/wordActions/wordActionCreator';

import WordByLetterListComponent from "../Components/wordByLetterListComponent";
import Spinner from "../Components/spinner";

function ViewWordsByLetter(props){
  let dispatch = useDispatch()
  const { match: { params } } = props
  const [triggerComponent, setTriggerComponent] = useState(false)
  let viewWordInDetailComponent, recievedWords;
  recievedWords = useSelector(state => state.fetchWordByLetterState)
  
  useEffect(() => { dispatch(wordActions.initiateFetchWordByLetter(params.letter)) }, [])
  
  useEffect(() => { setTriggerComponent(true) }, [triggerComponent])

  if(triggerComponent){
    if(!recievedWords.isFetching && recievedWords.isFetched){
      viewWordInDetailComponent = (
        <React.Fragment>
          <WordByLetterListComponent recievedWordsProps={recievedWords.wordsArray} />
          </React.Fragment> )
    }
    else viewWordInDetailComponent = (
      <React.Fragment>
        <div className='loader-container flex-row'>
        <Spinner />
        <p className='pleasewait-txt'>Please wait...</p></div></React.Fragment> )
  }
  else viewWordInDetailComponent = (
    <React.Fragment>
      <div className='loader-container flex-row'>
      <Spinner />
      <p className='pleasewait-txt'>Please wait...</p></div></React.Fragment> )

  return(
    <React.Fragment>
      <div className="site-article-container">
        <h2 className='section-heading'>{params.letter}</h2>
        <hr />
        <div className='form-article-container flex-row'>
          { viewWordInDetailComponent }
          </div></div></React.Fragment>)}

export default ViewWordsByLetter;



