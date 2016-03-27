import React, {Component, Text, View} from 'react-native'
import {Actions} from 'react-native-redux-router'
import Logo from '../../components/logo'
import AuthInput from '../../components/auth_input'
import Link from '../../components/link'
import Button from '../../components/button'
import styles from './login.styles'


class Login extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Logo />
        <AuthInput placeholder='Електронна пошта' keyboardType='email-address' />
        <AuthInput placeholder='Пароль' password />
        <Button text='Увійти' />
        <Link onPress={Actions.signup} text='Зареєструватись' />
      </View>
    )
  }
}

export default Login
