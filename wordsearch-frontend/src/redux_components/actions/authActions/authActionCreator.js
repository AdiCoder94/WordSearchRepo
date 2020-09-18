import authActionTypes from './authActionTypes'
import { checkEmptyFields } from '../form_validation_helper'
import { frontendURL, backendURL, signinURL, emptyFieldError } from '../../../config/constants';

export function requestSignin(userCred){
  return {
    type: authActionTypes.SIGNIN_REQUEST,
    payLoad: userCred
  }
}

export function authenticateSignin(data){
  return {
    type: authActionTypes.SIGNIN_AUTHENTICATED,
    payload: data
  }
}


export function failSignin(err){
  return {
    type: authActionTypes.SIGNIN_FAILED,
    payload: err
  }
}

export function initiateSignin(userCred){
  let emptyField = checkEmptyFields(userCred)

  if(emptyField){
    return dispatch => { 
      dispatch(requestSignin(userCred)) 
      return (    
        fetch(`${backendURL}${signinURL}`, {
        method: 'POST',
        headers:{ 
          'Access-Control-Allow-Origin': `${frontendURL}`,
          'Content-Type': 'application/json'},
        body: JSON.stringify({
          email: userCred.signUpEmail,
          password: userCred.logInPassword }) 
        })
      )
      .then(res => res.json())
      .then(json => 
        (json.success) ?
          dispatch(authenticateSignin(json))
        : dispatch(failSignin(json.message)) )
      .catch(err => console.log(err))  
      }}
    else return dispatch => {
      dispatch(failSignin(`${emptyFieldError}`)) }
}




