import React,{Component} from 'react'
import styles from './tabs.scss'
import classNames from 'classnames'
const tablist=[
  '全部',
  '精华',
  '问答',
  '分享',
  '招聘',
  '客户端测试'
]

class ListHead extends Component{
state={
  swt:0
}
handleClick(i){
  this.setState({
    swt:i
  })
}
  render(){
    return(
      <header className={styles.headers}>
        {
          tablist.map((val,i)=>{
            return(
              <a href="/"  key={`tab${i}`}className={classNames(styles.hd_tb, {active:Number(this.state.swt)===i})} onClick={this.handleClick.bind(this,i)}>{val}</a>
            )
          })
        }
      </header>
    )
  }
}
export default ListHead
