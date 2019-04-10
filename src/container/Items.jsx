import React,{Component} from 'react'
import {fetch_list,fetch_topic} from '../actions/topics'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {List,Tabs} from '../components'
import _ from 'lodash'
class Items extends Component {
  componentDidMount(){
    this.props.init()
  }
  componentWillReceiveProps(nextProps) {
     if (!_.isEqual(nextProps.location.state, this.props.location.state)) {

       this.props.fetch_list({
         page:nextProps.location.state.page,
         tab:'dev',
         limit:30,
         mdrender:true

       })
     }
  }
  render(){
    const {topicList}=this.props
    return(
      <main className='content'>
          {this.props.loading&&<span className="loading">loading</span>}
          <div className="panel">
            <div>
              <Tabs/>
              <List  topicList={topicList} onSkipto={this.props.onSkipto} page={this.props.p} featchTopic={this.props.fetch_topic}/>
            </div>
          </div>
      </main>
    )
  }
}
function mapStateToProps(state){
  return {
    topicList:state.topics.items.data||[],
    p:state.topics.items.page,
    loading:state.topics.items.loading
  }
}
function mapDispatchToProps(dispatch,ownProps){
  let p=ownProps.location.state&&ownProps.location.state.page
  return{
    fetch_list:bindActionCreators(fetch_list,dispatch),
    fetch_topic:bindActionCreators(fetch_topic,dispatch),
    init:()=>{
      dispatch(fetch_list({
        page:p||1,
        tab:'dev',
        limit:30,
        mdrender:true
      }))
    },
    onSkipto:(page)=>{
      let searchString=new URLSearchParams({
        tab:'dev',
        page
      }).toString()
      ownProps.history.push({
        path:'/',
        search:searchString,
        state:{
          tab:'dev',
          page
        }
      })
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Items)
