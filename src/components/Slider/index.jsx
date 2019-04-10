import React, {Component} from 'react'
import styles from './slider.scss'
import classNames from 'classnames'
import PanelHeader from '../PanelHeader'
import Cookies from 'js-cookie'
import {Link} from 'react-router-dom'
const loginTokens=Cookies.get('accesstoken')
const login_message=Cookies.get('login_message') ? JSON.parse(Cookies.get('login_message')).data : {}
class Slider extends Component {
  render() {
    const {login}=this.props
    return (
      <article className={classNames('sliders', 'fr')}>
        {!loginTokens&&<section className="panel">
          <div className={classNames(styles.inner,'inner')}>
            <p>CNode：Node.js专业中文社区</p>
            <div>
              您可以
              <button>登录</button>
              或
              <button>注册</button>
              ,也可以
              <br/>
              <a href="/" className={styles.git_btn}>
                <span>通过github登录</span>
              </a>
            </div>
          </div>
        </section>}
        {loginTokens&&
        <div className="panel">
          <PanelHeader>
            <span>个人信息</span>
          </PanelHeader>
          <div className={classNames(styles.inner,'inner')}>
            <ol>
              <li>
                <a href="/" className={styles.autors} >
                  <img src={login.login_message.avatar_url||login_message.avatar_url} alt="ads"/>
                  <span className={styles.user_name}>{login.login_message.loginname||login_message.loginname}</span>
                </a>
              </li>
              <li>
                <span className={styles.top_score}>"这家伙很懒什么都没留下"</span>
              </li>
            </ol>
          </div>
        </div>}
        <div className="panel">
          <div className={classNames(styles.inner,'inner')}>
            <Link to="/topic/create"><span className={styles.creat_topic}>发布话题</span></Link>
          </div>
        </div>
        <div className="panel">
          <div className={classNames(styles.inner,'inner')}>
            <a href="/">
              <img src="https://static.cnodejs.org/FjpEWk5hZd8DToyHKDbJ4masolIW" alt="ads"/>
            </a>
            <div className="skip10"></div>
            <a href="/">
              <img src="https://static.cnodejs.org/FjpEWk5hZd8DToyHKDbJ4masolIW" alt="ads"/>
            </a>
          </div>
        </div>
        <div className="panel">
          <PanelHeader>
            <span>积分榜</span>
            &nbsp;

            <a href="/">TOP 100 >></a>
          </PanelHeader>
          <div className={classNames(styles.inner,'inner')}>
            <ol>
              <li>
                <span className={styles.top_score}>ssss</span>
                <span className={styles.user_name}>ssss</span>
              </li>
            </ol>
          </div>
        </div>
      </article>)
    }
  }
  export default Slider
