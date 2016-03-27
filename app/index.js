import React, {Component, View} from 'react-native'
import {Provider} from 'react-redux'
import store from './store'
import Routes from './routes'

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    )
  }
}

export default App
