import {combineReducers} from 'redux'
import { connectRouter } from 'connected-react-router'
import topics from './topics'
import login from './login'
export default(history) => combineReducers({
  topics,
  login,
  router: connectRouter(history)
})
