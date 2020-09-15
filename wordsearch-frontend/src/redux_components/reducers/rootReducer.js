import { combineReducers } from 'redux'

import signinReducer from './authReducers/signinReducer'
import signoutReducer from './authReducers/signoutReducer'

const rootReducer = combineReducers({
  signinState: signinReducer,
  signoutState: signoutReducer,
})

export default rootReducer;