import React,{Component} from 'react'
import{bindActionCreators} from 'redux'
import * as topics from '../actions/topics'
import {connect} from 'react-redux'
import {Detail} from '../components'
class Main extends Component {
  componentDidMount(){
     this.props.topics.fetch_topic(this.props.match.params.id)
  }
  render(){
    const {item}=this.props
    return (
          <Detail item={item.topic_detail}/>
    )
  }
}
function mapStateToProps(state){
  return{
    item:state.topics.item||{}
  }
}
function mapDispatchToProps(dispatch){
  return {
    topics:bindActionCreators(topics,dispatch)
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Main)
