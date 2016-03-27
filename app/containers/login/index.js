import React, {Component, Text, View} from 'react-native'
import styles from './login.styles'

class Login extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Увійти
        </Text>
      </View>
    )
  }
}

export default Login
