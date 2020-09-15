import authActionTypes from '../../actions/authActions/authActionTypes';

const initialState = {
  isFetching: false,
  isAuthenticated: false,
  isErr: false,
  user: ''
} 

function signinReducer(state = initialState, action){
  switch(action.type){
    case authActionTypes.SIGNIN_REQUEST:
      return {
        ...state,
        isFetching: true,
        user: action.payload
      }
    

    default: return state }
  }

export default signinReducer;