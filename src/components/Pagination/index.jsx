import React,{Component} from 'react'
import styles from './pagination.scss'
import classNames from 'classnames'
import Item from './Item'
class Pagination extends Component{
  render(){
  const {total,pageSize,currentPage}=this.props
  const totalPage=Math.ceil(total/pageSize)
  const skip=2
  let elements=[]
  let from =0
  let to=totalPage-1
  if(currentPage>skip){
    from=currentPage-skip;
  }
  if(totalPage-currentPage>skip){
    to=currentPage+skip
  }
  if(from!==0){

    elements.push(<Item text={1} page={1} key={1} onSkipto={this.props.onSkipto}/>)
    if(from>1){
      elements.push(<Item text='...' key={'key..'}/>)
    }
  }
for(let i=from;i<=to;i++){
  let active=currentPage===i+1
  elements.push(<Item text={i+1} key={`${i}key`} page={i+1} active={active} onSkipto={this.props.onSkipto}/>)
}
if(to<totalPage-1){

  if(to<totalPage-2){
    elements.push(<Item text='...' disabled key={'disabled'}/>)
  }
  elements.push(<Item text={totalPage} page={totalPage} onSkipto={this.props.onSkipto} key={`${totalPage}key`}/>)
}
    return(
      <div className={styles.pagination}>
        <ul>
          <li><span className={classNames('fl')}>«</span></li>
          {elements}
          <li><span  className={classNames('fl')}>»</span></li>
        </ul>
      </div>
    )
  }
}
export default Pagination
