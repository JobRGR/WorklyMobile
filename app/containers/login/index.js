import React, {Component, PropTypes, Text, View} from 'react-native'
import {Actions} from 'react-native-redux-router'
import {connect} from 'react-redux'
import {setEmail, setPassword} from '../../actions/login'
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
    setPassword: PropTypes.func.isRequired
  }

  render() {
    return (
      <View style={styles.container}>
        <Logo />
        <AuthInput
          placeholder='Електронна пошта'
          keyboardType='email-address'
          onChangeText={this.props.setEmail}
          value={this.props.email} />
        <AuthInput
          placeholder='Пароль'
          password
          onChangeText={this.props.setPassword}
          value={this.props.password} />
        <Button text='Увійти' />
        <Link onPress={Actions.signup} text='Зареєструватись' />
      </View>
    )
  }
}

const mapStateToProps = ({login}) => ({...login})
const mapDispatchToProps =  dispatch => ({
  setEmail: data => dispatch(setEmail(data)),
  setPassword: data => dispatch(setPassword(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
