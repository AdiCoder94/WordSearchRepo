import wordActionTypes from '../../actions/wordActions/wordActionTypes';

const initialState = {
  isFetching: false,
  isSuccess: false,
  isErr: false,
  user: null,
  err: '',
  savedStatus: ''
} 

function addwordReducer(state = initialState, action){
  switch(action.type){
    case wordActionTypes.ADDWORD_INITIATE:
      console.log('add word inintiated')
      return {
        ...state,
        isFetching: true,
        user: action.payload }
    case wordActionTypes.ADDWORD_SUCCESS:
      console.log('success')
      return {
        ...state,
        isFetching: false,
        isErr: false,
        isSuccess: true, 
        err: '', 
        savedStatus: 'Word successfully saved!' }
    case wordActionTypes.ADDWORD_FAILED:
      console.log('failed', action.payload)
      return {
        ...state, 
        isFetching: false,
        isErr: true,
        savedStatus: '',
        err: action.payload }  
    default: return state }
  }

export default addwordReducer;