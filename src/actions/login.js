import * as types from '../constants/types'
export const login=(data)=>{
  return{
    type:types.LOGIN_REQUEST,
    data
  }
}
