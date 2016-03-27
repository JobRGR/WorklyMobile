import React, {Component, PropTypes, Text, View} from 'react-native'
import {connect} from 'react-redux'
import {Actions} from 'react-native-redux-router'
import {setEmail, setConfirm, setPassword, setName} from '../../actions/signup'
import AuthInput from '../../components/auth_input'
import Logo from '../../components/logo'
import Link from '../../components/link'
import Button from '../../components/button'
import styles from './signup.styles'

class SignUp extends Component {

  static propTypes = {
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    confirm: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    setEmail: PropTypes.func.isRequired,
    setPassword: PropTypes.func.isRequired,
    setConfirm: PropTypes.func.isRequired,
    setName: PropTypes.func.isRequired
  }

  render() {
    return (
      <View style={styles.container}>
        <Logo />
        <AuthInput
          placeholder="Ім'я Прізвище"
          value={this.props.name}
          onChangeText={this.props.setName}
        />
        <AuthInput
          placeholder='Електронна пошта'
          keyboardType='email-address'
          value={this.props.email}
          onChangeText={this.props.setEmail}
        />
        <AuthInput
          placeholder='Пароль'
          password
          value={this.props.password}
          onChangeText={this.props.setPassword}
        />
        <AuthInput
          placeholder='Повторіть пароль'
          password
          value={this.props.confirm}
          onChangeText={this.props.setConfirm}
        />
        <Button onPress={Actions.feed} text='Зареєструватись' />
        <Link onPress={Actions.login} text='Увійти' />
      </View>
    )
  }
}

const mapStateToProps = ({signup}) => ({...signup})
const mapDispatchToProps =  dispatch => ({
  setEmail: data => dispatch(setEmail(data)),
  setPassword: data => dispatch(setPassword(data)),
  setConfirm: data => dispatch(setConfirm(data)),
  setName: data => dispatch(setName(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
