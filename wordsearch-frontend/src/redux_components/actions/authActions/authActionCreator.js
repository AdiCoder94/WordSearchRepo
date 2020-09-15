import authActionTypes from './authActionTypes'

// creating auth action creators
export function requestSignin(userCred){
  return {
    type: authActionTypes.SIGNIN_REQUEST,
    payload: userCred
  }
}

export function grantSignin(){
  return {
    type: authActionTypes.SIGNIN_GRANTED,
    token: ''
  }
}

export function failSignin(){
  return {
    type: authActionTypes.SIGNIN_FAILED,
  }
}


