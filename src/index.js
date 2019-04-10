import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios'
import {notification} from 'antd'
import { push} from 'react-router-redux'
import rootReducer from './reducers'
import {rootSaga} from './sagas'
import {createStore,applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import {composeWithDevTools} from 'redux-devtools-extension'
import './styles/main.scss'
import { createBrowserHistory } from 'history'
import { ConnectedRouter, routerMiddleware } from 'connected-react-router'
const sagaMiddleware=createSagaMiddleware()
const history = createBrowserHistory()
const store=createStore(rootReducer(history),composeWithDevTools(
  applyMiddleware(sagaMiddleware,routerMiddleware(history))
))
sagaMiddleware.run(rootSaga)
axios.interceptors.response.use(res => {
  return res
}, err => {
  if (err.response.status === 401) {
    store.dispatch(push('/login'))
    notification.open({
      message: '提示',
      description: '身份验证异常，请重新输入邮箱密码登录',
    })
    return Promise.reject(err)
  } else {
    notification.open({
      message: '提示',
      description: '网络错误请稍后重试',
    })
    return Promise.reject(err)
  }
})
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
 document.getElementById('root'));

serviceWorker.unregister();
