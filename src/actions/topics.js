import {FEATCH_LIST_REQUEST,FETCH_TOPIC_REQUEST,CREATE_ITEM_REQUEST} from '../constants/types'
export const fetch_list=(params)=>{
  return {
    type:FEATCH_LIST_REQUEST,
    payload:{...params}
  }
}
export const fetch_topic=(ID)=>{
  return{
    type:FETCH_TOPIC_REQUEST,
    ID
  }
}
export const create_item=(data)=>{
  return{
    type:CREATE_ITEM_REQUEST,
    data:{
      ...data,
      accesstoken:'ebde5351-dc8a-4fac-8fa6-5f8e46aecbb4'
    }
  }
}
