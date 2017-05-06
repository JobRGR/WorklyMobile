import React, { Component } from 'react'
import {AppRegistry} from 'react-native'
import {Provider} from 'react-redux'
import store from './app/store'
import Routes from './app/routes'

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('WorklyMobile', () => App)
