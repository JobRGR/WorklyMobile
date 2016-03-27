import React, {Component, Text, View, TouchableHighlight} from 'react-native'
import {Actions} from 'react-native-redux-router'
import styles from './signup.styles'

class SignUp extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Зареєструватись
        </Text>
        <TouchableHighlight onPress={Actions.login}>
          <Text style={styles.button}>Увійти</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

export default SignUp
