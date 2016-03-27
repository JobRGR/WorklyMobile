import React, {Component, View} from 'react-native'
import {Router, Route} from 'react-native-redux-router'
import Home from './containers/home'

class Routes extends Component {

  render(){
    const style = {flex: 1}
    return (
      <View style={style}>
        <Router>
          <Route name='home' initial={true} component={Home} title='Home' />
        </Router>
      </View>
    )
  }
}

export default Routes
