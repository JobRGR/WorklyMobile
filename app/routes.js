import React, {Component, View, StatusBar} from 'react-native'
import {connect} from 'react-redux'
import {Router, Route, Schema, Animations} from 'react-native-redux-router'
import {green as color} from './components/base/color'
import {NavBar, NavBarBack, NavBarLogout, NavBarAuth} from './components/nav_bar'
import Home from './containers/home'
import SignUp from './containers/signup'
import Login from './containers/login'
import Feed from './containers/feed'
import Vacancy from './containers/vacancy'
import Start from './containers/start'
import Company from './containers/company'
import CompanyFeed from './containers/company_feed'

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
          <Schema name='back' sceneConfig={Animations.FlatFloatFromRight} navBar={NavBarBack} />
          <Schema name='default' sceneConfig={Animations.FlatFloatFromRight} navBar={NavBar} />
          <Schema name='logout' sceneConfig={Animations.FlatFloatFromRight} navBar={NavBarLogout} dispatch={this.props.dispatch} />

          <Route name='start' initial={true} component={Start} title='Workly' />
          <Route name='home' component={Home} title='Workly' />
          <Route name='signup' component={SignUp} title='SignUp' schema='auth' title='Реєстрація' />
          <Route name='login' component={Login} title='Login' schema='auth'  title='Вхід' />
          <Route name='feed' component={Feed} title='Вакансії' schema='logout' />
          <Route name='companyFeed' component={CompanyFeed} schema='logout' />
          <Route name='vacancy' component={Vacancy} schema='back' />
          <Route name='company' component={Company} schema='back' />
        </Router>
      </View>
    )
  }
}


export default connect()(Routes)
