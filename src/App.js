import React, {Component} from 'react'
import {Items, Detail,Login,NewItem} from './container'
import {Headers,Slider} from './components'
import {connect} from 'react-redux'
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'
import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
class App extends Component {
  render() {
    console.log(Cookies.get('login_message'))
    return (
      <div className="app">
        <Router>
          <div>
            <Headers/>
            <main className="container">
                <Slider login={this.props.login}/>
              <Switch>
                <Route path="/" component={Items} exact/>
                <Route path="/detail/:id" exact component={Detail} />
                <Route path="/login/"  component={Login}/>
                <Route path="/topic/create" component={NewItem}/>
              </Switch>
            </main>
          </div>
      </Router>
      </div>
    )
  }
}
function mapStateToProps(state){
  return{
    login:state.login||{}
  }
}
function mapDispatchToProps(dispatch,ownProps){
  return{

  }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App))
