import * as types from '../constants/types'
const initialState={
  loading:false,
  login_message:{},
  error:null
}
export default (state=initialState,action)=>{
  switch (action.type) {
    case types.LOGIN_REQUEST:
    return{
      ...state,
      loading:true
    }
    case types.LOGIN_SUCCESS:
    return{
      ...state,
      loading:false,
      login_message:action.login_message
    }
    case types.LOGIN_FAIL:
    return{
      ...state,
      error:action.error
    }
    default:
    return state
  }
}
