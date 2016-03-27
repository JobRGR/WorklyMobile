import React, {Component, Text, View} from 'react-native'
import {Actions} from 'react-native-redux-router'
import AuthInput from '../../components/auth_input'
import Logo from '../../components/logo'
import Link from '../../components/link'
import Button from '../../components/button'
import styles from './signup.styles'

class SignUp extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Logo />
        <AuthInput placeholder="Ім'я Прізвище" />
        <AuthInput placeholder='Електронна пошта' keyboardType='email-address' />
        <AuthInput placeholder='Пароль' password />
        <AuthInput placeholder='Повторіть пароль' password />
        <Button text='Зареєструватись' />
        <Link onPress={Actions.login} text='Увійти' />
      </View>
    )
  }
}

export default SignUp
