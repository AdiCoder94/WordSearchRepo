import wordActionTypes from './wordActionTypes'
import { frontendURL, backendURL, emptyFieldError, enternewwordURL } from '../../../config/constants';
import { checkEmptyFields, capitalizeFirstLetter } from '../form_validation_helper'

/**
 * add word action creators
 */
export function requestAddWord(wordDetail){
  console.log('add word started', wordDetail)
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



// saveWord(){
//   // grabbing state
//   var {
//     newWord,
//     originLang,
//     rootWord,
//     partOfSpeech,
//     subCategory,
//     wordConnotation,
//     definition } = this.state

//   fetch(`${backendURL}${enternewwordURL}`, {
//     method: 'POST',
//     headers:{
//       'Access-Control-Allow-Origin': `${frontendURL}`,
//       'Content-Type': 'application/json'},
//     body: JSON.stringify({
//       enteredWord: this.capitalizeFirstLetter(newWord),
//       languageOfOrigin: originLang,
//       root: rootWord,
//       partOfSpeech: partOfSpeech,
//       partOfSpeechSubCategory: subCategory,
//       connotation: wordConnotation,
//       definition: definition})})
//     .then(res => res.json())
//     .then(json => {
//       if(json.success){
//         this.setState({
//           newWord: '',
//           originLang: '',
//           rootWord: '',
//           partOfSpeech: '',
//           subCategory: '',
//           wordConnotation: '',
//           definition: '',
//           savingStatus: json.message,
//           showWordSavedMsg: true }, () => {
//             setTimeout(this.changeSaveWordMsgState, 1000)})}
//       else {
//         this.setState({
//           savingStatus: json.err_msg,
//           showWordSavedMsg: true }, () => {
//           setTimeout(this.changeSaveWordMsgState, 1000)})}})}		


