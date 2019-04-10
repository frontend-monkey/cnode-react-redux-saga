import React,{Component} from 'react'
import {PanelHeader} from '../components'
import {connect} from 'react-redux'
import * as topicsActions from '../actions/topics'
import Form from './ItemForm'
import {bindActionCreators} from 'redux'
class NewItem extends Component{
  handleSubmit(data){
    this.props.topicsActions.create_item(data)

  }
  componentWillReceiveProps(nextProps){
    this.props.history.push(`/detail/${this.props.topic_id}`)
  }
  render(){
    return(
      <main className="content">
        <PanelHeader>
          <span className="ph_breadcrumb">主页</span>
            <b>/</b>
          <span className="ph_acive">发布话题</span>
        </PanelHeader>
        <div className="inner">
          <Form onSubmit={this.handleSubmit.bind(this)}/>
        </div>
      </main>
    )
  }
}
function mapStateToProps(state){
  return{
    topic_id:state.topics.item.topic_id||1
  }
}
function mapDispatchToProps(dispatch){
  return{
    topicsActions:bindActionCreators(topicsActions,dispatch)
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(NewItem)
