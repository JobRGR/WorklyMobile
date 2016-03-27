import React, {Component, Text, View} from 'react-native'
import {Actions} from 'react-native-redux-router'
import Link from '../../components/link'
import styles from './signup.styles'

class SignUp extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Зареєструватись
        </Text>
        <Link onPress={Actions.login} text='Увійти' />
      </View>
    )
  }
}

export default SignUp
