import React, {Component, View, StatusBar} from 'react-native'
import {connect} from 'react-redux'
import {Router, Route, Schema, Animations} from 'react-native-redux-router'
import Home from './containers/home'
import SignUp from './containers/signup'
import Login from './containers/login'
import Feed from './containers/feed'
import Start from './containers/start'
import {color} from './components/nav_bar/nav_bar.styles'
import {NavBar, NavBarBack, NavBarLogout, NavBarAuth} from './components/nav_bar'

class Routes extends Component {

  render(){
    const style = {flex: 1}
    return (
      <View style={style}>
        <StatusBar
          backgroundColor={color}
          barStyle='light-content'
        />
        <Router>
          <Schema name='auth' sceneConfig={Animations.FlatFloatFromRight} navBar={NavBarAuth} />
          <Schema name='default' sceneConfig={Animations.FlatFloatFromRight} navBar={NavBar} />
          <Schema name='logout' sceneConfig={Animations.FlatFloatFromRight} navBar={NavBarLogout} dispatch={this.props.dispatch} />

          <Route name='start' initial={true} component={Start} title='Workly' />
          <Route name='home' component={Home} title='Workly' />
          <Route name='signup' component={SignUp} title='SignUp' schema='auth' title='Реєстрація' />
          <Route name='login' component={Login} title='Login' schema='auth'  title='Вхід' />
          <Route name='feed' component={Feed} title='Вакансії' schema='logout' />
        </Router>
      </View>
    )
  }
}

export default connect()(Routes)
