import {
  takeEvery,
  call,
  put
} from 'redux-saga/effects'
import * as types from '../constants/types'
import {
  topics
} from '../api'

function* fetchList(action) {
  try {
    const ftTopic = yield call(topics().getList, action.payload)
    yield put({
      type: types.FEATCH_LIST_SUCCESS,
      list: ftTopic.data,
      p: action.payload.page
    })
  } catch (e) {
    yield put({
      type: types.FEATCH_LIST_FAIL,
      error: e.message
    })
  }
}
export function* watchList() {
  yield takeEvery(types.FEATCH_LIST_REQUEST, fetchList)
}

function* fetchTopic(action) {
  try {
    const topic = yield call(topics().getTopic, action.ID)
    yield put({
      type: types.FETCH_TOPIC_SUCCESS,
      topic: topic.data
    })
  } catch (e) {
    yield put({
      type: types.FETCH_TOPIC_FAIL,
      error: e.message
    })
  }
}
export function* watchTopic() {
  yield takeEvery(types.FETCH_TOPIC_REQUEST, fetchTopic)
}
function* createItem(action){
  try{
    const create_message=yield call(topics().createItem,action.data)
    console.log(create_message,1111111)
    yield put({
      type:types.CREATE_ITEM_SUCCESS,
      create_message:create_message
    })

  }catch(e){
    yield put({
      type:types.CREATE_ITEM_FAIL,
      error:e.message
    })
  }
}
export function* watchCreateItem(){
  yield takeEvery(types.CREATE_ITEM_REQUEST,createItem)
}
