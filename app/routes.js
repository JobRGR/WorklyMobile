import React, {Component, View, StatusBar} from 'react-native'
import {Router, Route, Schema, Animations} from 'react-native-redux-router'
import Home from './containers/home'
import SignUp from './containers/signup'
import Login from './containers/login'
import {color} from './components/nav_bar/nav_bar.styles'
import {NavBar, NavBarBack} from './components/nav_bar'

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
          <Schema name='auth' sceneConfig={Animations.FlatFloatFromRight} navBar={NavBarBack} />
          <Schema name='default' sceneConfig={Animations.FlatFloatFromRight} navBar={NavBar} />

          <Route name='home' initial={true} component={Home} title='Workly' />
          <Route name='signup' component={SignUp} title='SignUp' schema='auth' title='Реєстрація' />
          <Route name='login' component={Login} title='Login' schema='auth'  title='Вхід' />
        </Router>
      </View>
    )
  }
}

export default Routes
