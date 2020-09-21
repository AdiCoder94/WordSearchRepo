import { combineReducers } from 'redux'

import signinReducer from './authReducers/signinReducer'
import signoutReducer from './authReducers/signoutReducer'
import signupReducer from './authReducers/signupReducer';
import addwordReducer from './wordReducers/addWordReducer';
import fetchWordReducer from './wordReducers/fetchWordReducer';

const rootReducer = combineReducers({
  signupState: signupReducer,
  signinState: signinReducer,
  signoutState: signoutReducer,
  addwordState: addwordReducer,
  fetchWordState: fetchWordReducer
})

export default rootReducer;