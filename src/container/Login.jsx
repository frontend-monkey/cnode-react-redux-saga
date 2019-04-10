import React,{Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {LoginForm,PanelHeader} from '../components'
import * as loginActions from '../actions/login'
class Login extends Component{
  handleSubmit(data){
    this.props.loginActions.login(data)
  }
  render(){
    return(
      <div className="content">
        {this.props.login.error&&<div>{this.props.login.error}</div>}
        <PanelHeader>
          <span className="ph_breadcrumb">主页</span>
            <b>/</b>
          <span className="ph_acive">登录</span>
        </PanelHeader>
        <LoginForm onSubmit={this.handleSubmit.bind(this)}/>
      </div>
    )
  }
}
function mapStateToProps(state,ownProps){
  if(state.login.login_message.success){
    ownProps.history.push('/')
  }
  return{
    login:state.login||{}
  }
}
function mapDispatchToProps(dispatch,ownProps){
  return{
    loginActions:bindActionCreators(loginActions,dispatch)
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Login)
