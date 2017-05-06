import React, {Component, PropTypes} from 'react'
import {Text, View} from 'react-native'
import {Actions} from '../../react-native-redux-router'
import {connect} from 'react-redux'
import {setEmail, setPassword, loginUser} from '../../actions/login'
import Logo from '../../components/logo'
import AuthInput from '../../components/auth_input'
import Link from '../../components/link'
import Button from '../../components/button'
import styles from './login.styles'


class Login extends Component {

  static propTypes = {
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    setEmail: PropTypes.func.isRequired,
    startLogin: PropTypes.bool.isRequired,
    emailError: PropTypes.bool.isRequired,
    passwordError: PropTypes.bool.isRequired,
    setPassword: PropTypes.func.isRequired,
    loginUser: PropTypes.func.isRequired
  }

  onClick() {
    let {email, password} = this.props
    this.props.loginUser({email, password})
  }

  render() {
    return (
      <View style={styles.container}>
        <Logo />
        <AuthInput
          placeholder='Електронна пошта'
          keyboardType='email-address'
          maxLength={150}
          error={this.props.emailError}
          onChangeText={this.props.setEmail}
          value={this.props.email} />
        <AuthInput
          placeholder='Пароль'
          password
          maxLength={50}
          error={this.props.passwordError}
          onChangeText={this.props.setPassword}
          value={this.props.password} />
        <Button loading={this.props.startLogin} onPress={() => this.onClick()} text='Увійти' />
        <Link onPress={Actions.signup} text='Зареєструватись' />
      </View>
    )
  }
}

const mapStateToProps = ({login}) => login
const mapDispatchToProps = dispatch => ({
  setEmail: data => dispatch(setEmail(data)),
  setPassword: data => dispatch(setPassword(data)),
  loginUser: data => dispatch(loginUser(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
