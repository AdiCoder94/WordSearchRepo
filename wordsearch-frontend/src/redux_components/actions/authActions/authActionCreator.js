import authActionTypes from './authActionTypes'
import { checkEmptyFields } from '../form_validation_helper'
import { frontendURL, backendURL, signinURL,signoutURL, emptyFieldError } from '../../../config/constants';

/**
 * signin action creators
 */
export function requestSignin(userCred){
  return {
    type: authActionTypes.SIGNIN_INITIATE,
    payload: userCred
  }
}

export function authenticateSignin(data){
  // let authHeader = new Headers()
  // authHeader.append('Authorization', token)
  // authHeader.append('Access-Control-Allow-Origin', `${frontendURL}`)
  // authHeader.append('Content-Type', 'application/json')

  return {
    type: authActionTypes.SIGNIN_SUCCESS,
    payload: data
  }
}

export function failSignin(err){
  return {
    type: authActionTypes.SIGNIN_FAILED,
    payload: err
  }
}

/**
 * signout action creators
 */
export function requestSignout(token){
  return {
    type: authActionTypes.SIGNOUT_INITIATE,
    payload: token
  }
}

export function successSignout(){
  return {
    type: authActionTypes.SIGNOUT_SUCCESS,
  }
}

export function failSignout(err){
  return {
    type: authActionTypes.SIGNOUT_FAILED,
    payload: err
  }
}

/**
 * auth functions
 * @param {} userCred 
 */

// signin function 
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

// signout function
export function initiateSignout(token){
  let authHeaders = new Headers()
  authHeaders.append('Authorization', token)
  authHeaders.append('Access-Control-Allow-Origin', `${frontendURL}`)
  authHeaders.append('Content-Type', 'application/json')

  return dispatch => {
    dispatch(requestSignout(token))
    return (
      fetch(`${backendURL}${signoutURL}`, {
        method: 'POST',
        headers: authHeaders,
        body: JSON.stringify({ token: token }) 
      })
    )
    .then(res => res.json())
    .then(json => 
      (json.success) ?
        dispatch(successSignout())
      : dispatch(failSignout()))
  }
}


// logout(){
//   let token = sessionStorage.getItem('token')
//   fetch(`${backendURL}${signoutURL}`, {
//     method: 'POST',
//     headers:{
//       'Access-Control-Allow-Origin': `${frontendURL}`,
//       'Content-Type': 'application/json' },
//     body: JSON.stringify({ 
//       shouldLogout: this.state.doLogout,
//       user: token })})
//   .then(res => res.json())
//   .then(json => {
//     if(json.success){
//       sessionStorage.removeItem('token')
//       window.location.href = `${frontendURL}` 
//     }})
//   .catch(err => console.log(err))}

