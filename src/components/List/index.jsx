import React,{Component} from 'react'
import Pagination from '../Pagination'
import styles from './list.scss'
import classNames from 'classnames'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import {Link} from 'react-router-dom'
dayjs.extend(relativeTime)
class List extends Component{
handleClick(e, ID){
  e.preventDefault()
  this.props.featchTopic(
    ID
  )
}
  render(){
    const {topicList,page}=this.props
    return(
      <main className={classNames(styles.inner_container,'inner')}>
        <div className={styles.topic_list} >
        {
          topicList.map((val,i)=>{
            return(
                <div className={styles.cell} key={`${i}listcount`} onClick={(e) => this.handleClick(e, val.id)}>
                    <a href="/" className={classNames(styles.user_avatar,'fl')}>
                      <img src={val.author.avatar_url} alt="头像"/>
                    </a>
                      <span className={classNames('fl',styles.reply_count)}>
                        <b className={styles.count_of_reply}>{val.reply_count}</b>
                        <span className={styles.count_seperator}>/</span>
                        <em className={styles.count_of_visit}>{val.visit_count}</em>
                      </span>
                    <a href="/" className={classNames(styles.last_time,'fr')}>
                      <img src={val.author.avatar_url} alt="avator"/>
                      <span>{dayjs(val.create_at).fromNow()}</span>
                    </a>
                   <Link to={`/detail/${val.id}`}>
                      <div className={classNames(styles.topic_title_wrapper)}>
                        <span className={classNames(styles.topiclist_tab,{'put_top':val.top||val.good},{'topiclist_ask':!val.top&&!val.good})}>{!val.top&&!val.good?'问答':val.top?'置顶':'精华'}</span>
                        <b href='/' className={classNames(styles.topic_title)}>{val.title}</b>
                      </div>
                   </Link>
              </div>
            )
          })
        }
        </div>
        <Pagination currentPage={page} total={81}  pageSize={10} onSkipto={this.props.onSkipto}/>
      </main>
    )
  }
}
export default List
