import{
  takeEvery,
  put,
  call
}from 'redux-saga/effects'
import * as types from '../constants/types'
import {topics} from '../api'
import Cookies from 'js-cookie'
let loginTokens='accesstoken'
function* login(action){
  try{
    const login_message=yield call(topics().login,action.data)
    yield put({
      type:types.LOGIN_SUCCESS,
      login_message:login_message.data
    })
    yield Cookies.set(loginTokens,action.data.accesstoken,{expires:7})
    yield Cookies.set('login_message',login_message,{expires:7})
  }catch(err){
    yield put({
      type:types.LOGIN_FAIL,
      error:err.message
    })
  }

}
export function* watchLogin(){
   yield takeEvery(types.LOGIN_REQUEST,login)
}
