import React, {Component, View} from 'react-native'
import {Router, Route} from 'react-native-redux-router'
import Home from './containers/home'
import SignUp from './containers/signup'
import Login from './containers/login'

class Routes extends Component {

  render(){
    const style = {flex: 1}
    return (
      <View style={style}>
        <Router>
          <Route name='home' initial={true} component={Home} title='Home' />
          <Route name='signup' component={SignUp} title='SignUp' />
          <Route name='login' component={Login} title='Login' />
        </Router>
      </View>
    )
  }
}

export default Routes
