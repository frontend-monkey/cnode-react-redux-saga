import React,{Component} from 'react'
import styles from './detail.scss'
import dayjs from 'dayjs'
import classNames from 'classnames'
import relativeTime from 'dayjs/plugin/relativeTime'
  dayjs.extend(relativeTime)
class Detail extends Component{
  render(){
    const {item}=this.props
    return(

<div className="content">
      <main className="panel">
        <div className={styles.header_topics} key="featch_topic1">
          <span className={styles.title}>{item.title}</span>
          <div className={styles.change}>
            <span>发布于{dayjs(item.create_at).fromNow(false)}</span>
            <span>作者{item.author&&item.author.loginname}</span>
            <span>{item&&item.visit_count}次浏览</span>
            <span>来自于{item.good?'精华':item.top?'置顶':'问答'}</span>
          </div>
        </div>
        <div className={styles.inner_topics} key="featch_topic2">
          <div className={styles.topic_content} dangerouslySetInnerHTML={{__html:item.content}}>
          </div>
        </div>
      </main>
      <div className="panel">
        <header className={styles.headers}>{item.replies&&item.replies.length}条回复</header>
        {
          item.replies&&item.replies.map((val,i)=>{
            return(
              <div className={styles.reply_item} key={`replys${i}`} >
                <div className={styles.authorContent}>
                  <a href="/">
                    <img src={val.author.avatar_url} alt="author_image"/>
                  </a>
                  <span className={styles.user_info}>
                    <a href="/" className={styles.dark}>{val.author.loginname}</a>
                    <a href="/" className={styles.reply_time}>{i+1}楼{dayjs('2019-03-01T03:04:43.075Z').fromNow(false)}</a>
                  </span>
                  <a href="/" className={ classNames(styles.user_action,'fr')}>
                    <span className={styles.thumbs} >
                      <i className={classNames('fas',styles.fa,'fa-thumbs-up')}></i>
                      <b className={styles.count}>1</b>
                    </span>
                    <span>
                      <i className={classNames('fas',styles.fa,'fa-reply')}></i>
                    </span>
                  </a>
                </div>
                <div className={styles.reply_content} dangerouslySetInnerHTML={{__html:val.content}}>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
    )
  }
}
export default Detail
