import React, {Component, Text, View} from 'react-native'
import styles from './home.styles'

class Home extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Workly!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    )
  }
}

export default Home
