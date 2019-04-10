import React,{Component} from 'react'
import styles from './navbar.scss'
import classNames from 'classnames'
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'
let arr=[{name:'首页',path:'/'},{name:'新手入门',path:'/getstart'},{name:'API',path:'/api'},{name:'关于',path:'/about'},{name:'注册',path:'/signin'},{name:'登录',path:'/login'}]
  //把path加/否则会有多余渲染
class Headers extends Component{

  handleClick(e){
    e.preventDefault()
  }
  render(){
    if(Cookies.get('accesstoken')){
      arr=[{name:'首页',path:'/'},{name:'新手入门',path:'/getstart'},{name:'API',path:'/api'},{name:'关于',path:'/about'},{name:'设置',path:'/setting'},{name:'消息',path:'/message'},{name:'退出',path:'/login'}]
    }
    return(
      <header  className={styles.navbar}>
        <div className={styles.inner}>
          <div className={classNames(styles.containerd,styles.clearfix)}>
            <a href="/" className={styles.brand}>
              <img src="/images/cnodejs_light.svg" alt="logo"/>
            </a>
            <form id="search_form" className={styles.nav_search}>
              <input type="text" className={styles.search_box}/>
            </form>
            <ul className={classNames(styles.nav)}>
              {
                arr.map((val)=>(
                  <li key={val.name} onClick={(e)=>{this.handleClick(e)}}>
                  <Link to={val.path} replace>{val.name}</Link>
                </li>))
              }
            </ul>
          </div>
        </div>
      </header>
    )
  }
}
export default Headers
