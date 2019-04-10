import * as types from '../constants/types'
const initialState={
  items:{
    loading:false,
    error:null,
    data:[],
    page:1,
  },
  item:{
    loading:false,
    topic_detail:{},
    topic_id:''
  }
}
const user = (state = initialState, action) => {
  switch (action.type) {
    case types.FEATCH_LIST_REQUEST:
     return {
       ...state,
       items:{
         ...state.items,
         loading:true
       }
     }
     case types.FEATCH_LIST_SUCCESS:
     return{
       ...state,
       items:{
         ...state.items,
         loading:false,
         error:null,
         data:action.list.data,
         page:action.p
       }
     }

     case types.FEATCH_LIST_FAIL:
     return{
       ...state,
       items:{
         ...state.items,
         loading:true,
         error:action.error
       }
     }
     case types.FETCH_TOPIC_REQUEST:
     return{
       ...state,
       item:{
        ...state.item,
        loading:true
       }
     }
     case types.FETCH_TOPIC_SUCCESS:
     return{
       ...state,
       item:{
         ...state.item,
         loading:false,
         topic_detail:action.topic.data
       }
     }
     case types.FETCH_TOPIC_FAIL:
     return{
       ...state,
       item:{
         ...state.item,
         loading:true
       }
     }
     case types.CREATE_ITEM_REQUEST:
     return{
       ...state,
       item:{
         ...state.item,
         loading:true
       }
     }
     case types.CREATE_ITEM_SUCCESS:
     return{
       ...state,
       item:{
         ...state.item,
         loading:false,
         topic_id:action.create_message.data.topic_id
       }
     }
    default: return state

  }
}
export default user
