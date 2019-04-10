import {all,fork} from 'redux-saga/effects'
import * as topics from './topics'
import * as login from './login'
export function* rootSaga(){
  yield all([
...Object.values(topics),
...Object.values(login)
].map(fork))
}
