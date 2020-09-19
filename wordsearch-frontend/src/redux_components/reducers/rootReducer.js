import { combineReducers } from 'redux'

import signinReducer from './authReducers/signinReducer'
import signoutReducer from './authReducers/signoutReducer'
import signupReducer from './authReducers/signupReducer';

const rootReducer = combineReducers({
  signupState: signupReducer,
  signinState: signinReducer,
  signoutState: signoutReducer,
})

export default rootReducer;