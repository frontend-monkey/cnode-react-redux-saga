import React, {Component} from 'react'
import classNames from 'classnames'
class Item extends Component {
  handleClick(page){
    this.props.onSkipto(page)
  }
  render() {
    const {text,active,page}=this.props
    return (
        <li className={classNames({on:active})}>
          <span className={classNames('fl')} onClick={this.handleClick.bind(this,page)}>{text}</span>
        </li>
      )
  }
}
export default Item
