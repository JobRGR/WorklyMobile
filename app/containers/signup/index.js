import React, {Component, PropTypes, Text, TouchableHighlight,  View} from 'react-native'
import {connect} from 'react-redux'
import {Actions} from 'react-native-redux-router'
import {setEmail, setConfirm, setPassword, setName, signupStudent, signupCompany, setStudent, setCompany, STUDENT} from '../../actions/signup'
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
    type: PropTypes.string.isRequired,
    startSignup: PropTypes.bool.isRequired,
    setEmail: PropTypes.func.isRequired,
    setPassword: PropTypes.func.isRequired,
    setConfirm: PropTypes.func.isRequired,
    setName: PropTypes.func.isRequired,
    signupStudent: PropTypes.func.isRequired,
    signupCompany: PropTypes.func.isRequired,
    setStudent: PropTypes.func.isRequired,
    setCompany: PropTypes.func.isRequired,
    nameError: PropTypes.string,
    passwordError: PropTypes.string,
    emailError: PropTypes.string,
    confirmError: PropTypes.string
  }

  onClick() {
    const {email, name, password, confirm} = this.props
    const signUp = this.props.type == STUDENT ? this.props.signupStudent : this.props.signupCompany
    signUp({email, name, password, confirm})
  }

  render() {
    const isStudent = this.props.type == STUDENT
    return (
      <View style={styles.container}>
        <Logo />
        <View style={styles.typeWrapper}>
          <TouchableHighlight underlayColor='white' onPress={() => this.props.setStudent()}>
            <Text style={[styles.type, isStudent && styles.typeActive]}>Студент</Text>
          </TouchableHighlight>
          <TouchableHighlight underlayColor='white' onPress={() => this.props.setCompany()}>
            <Text style={[styles.type, !isStudent && styles.typeActive]}>Компанія</Text>
          </TouchableHighlight>
        </View>
        <AuthInput
          placeholder={isStudent ? "Ім'я та Прізвище" : 'Назва компанії'}
          value={this.props.name}
          maxLength={150}
          error={this.props.nameError}
          onChangeText={this.props.setName}
        />
        <AuthInput
          placeholder='Електронна пошта'
          keyboardType='email-address'
          value={this.props.email}
          error={this.props.emailError}
          maxLength={150}
          onChangeText={this.props.setEmail}
        />
        <AuthInput
          placeholder='Пароль'
          password
          value={this.props.password}
          error={this.props.passwordError}
          maxLength={50}
          onChangeText={this.props.setPassword}
        />
        <AuthInput
          placeholder='Повторіть пароль'
          password
          value={this.props.confirm}
          error={this.props.confirmError}
          maxLength={50}
          onChangeText={this.props.setConfirm}
        />
        <Button loading={this.props.startSignup} onPress={() => this.onClick()} text='Зареєструватись' />
        <Link onPress={Actions.login} text='Увійти' />
      </View>
    )
  }
}

const mapStateToProps = ({signup}) => signup
const mapDispatchToProps =  dispatch => ({
  setEmail: data => dispatch(setEmail(data)),
  setPassword: data => dispatch(setPassword(data)),
  setConfirm: data => dispatch(setConfirm(data)),
  setName: data => dispatch(setName(data)),
  signupStudent: data => dispatch(signupStudent(data)),
  signupCompany: data => dispatch(signupCompany(data)),
  setStudent: () => dispatch(setStudent),
  setCompany: () => dispatch(setCompany)
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
