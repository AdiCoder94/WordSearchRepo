import wordActionTypes from './wordActionTypes'
import { frontendURL, backendURL, emptyFieldError, enternewwordURL, viewworddatabaseURL } from '../../../config/constants';
import { checkEmptyFields, capitalizeFirstLetter } from '../form_validation_helper'

/**
 * add word action creators
 */
export function requestAddWord(wordDetail){
  return {
    type: wordActionTypes.ADDWORD_INITIATE,
    payload: wordDetail
  }
}

export function successAddWord(){
  return {
    type: wordActionTypes.ADDWORD_SUCCESS,
  }
}

export function failAddWord(err){
  return {
    type: wordActionTypes.ADDWORD_FAILED,
    payload: err
  }
}

export function requestFetchWord(){
  return {
    type: wordActionTypes.FETCHWORDS_INITIATE,
  }
}

export function successFetchWord(data){
  return {
    type: wordActionTypes.FETCHWORDS_SUCCESS,
    payload: data
  }
}

export function failFetchWord(err){
  return {
    type: wordActionTypes.FETCHWORDS_FAILED,
    payload: err
  }
}

//TODO: create an explicit function to set auth headers
/**
 * auth functions
 * @param {} userDetail
 */

// addword  function
export function initiateAddWord(wordDetail){
  let authHeaders = new Headers()
  let currentUser = window.sessionStorage.getItem('token')
  authHeaders.append('Authorization', currentUser)
  authHeaders.append('Access-Control-Allow-Origin', `${frontendURL}`)
  authHeaders.append('Content-Type', 'application/json')

  let noEmptyField = checkEmptyFields(wordDetail)
  if(noEmptyField){
    return dispatch => {
      dispatch(requestAddWord(wordDetail))
      return(
        fetch(`${backendURL}${enternewwordURL}`, {
          method: 'POST',
          headers: authHeaders,
          body: JSON.stringify({
            enteredWord: capitalizeFirstLetter(wordDetail.newWord),
            languageOfOrigin: wordDetail.originLang,
            root: wordDetail.rootWord,
            partOfSpeech: wordDetail.partOfSpeech,
            partOfSpeechSubCategory: wordDetail.subCategory,
            connotation: wordDetail.wordConnotation,
            definition: wordDetail.definition })   
        })
        .then(res => res.json())
        .then(json => 
          (json.success) ?
            dispatch(successAddWord()) :
            dispatch(failAddWord(json.err_msg))
          )
      )
    }
  }
  else return dispatch => dispatch(failAddWord(`${emptyFieldError}`)) 
} 

// fetchwords function
export function initiateFetchWord(){
  let authHeaders = new Headers()
  let currentUser = window.sessionStorage.getItem('token')
  authHeaders.append('Authorization', currentUser)
  authHeaders.append('Access-Control-Allow-Origin', `${frontendURL}`)
  authHeaders.append('Content-Type', 'application/json')

  return dispatch => {
    dispatch(requestFetchWord())
    return(
      fetch(`${backendURL}${viewworddatabaseURL}`, 
        {	method: 'GET',
          headers: authHeaders })
        .then(res => res.json())
        .then(json => 
          (json.success) ? 
            (dispatch(successFetchWord(json))) :
            (dispatch(failFetchWord(json.err_msg)))
          )
        .catch(err => console.log(err))
    )
  }
} 

