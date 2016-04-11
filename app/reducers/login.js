import {SET_LOGIN_EMAIL, SET_LOGIN_PASSWORD} from '../actions/login'
import {ERROR_LOGIN_USER} from '../actions/user'

let initialState = {
  email: '',
  password: '',
  emailError: false,
  passwordError: false
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_LOGIN_EMAIL:
      return {
        ...state,
        email: action.data,
        emailError: false
      }
    case SET_LOGIN_PASSWORD:
      return {
        ...state,
        password: action.data,
        passwordError: false
      }
    case ERROR_LOGIN_USER:
      return {
        ...state,
        emailError: true,
        passwordError: true
      }
    default:
      return state
  }
}
