import {
  SET_LOGIN_EMAIL,
  SET_LOGIN_PASSWORD,
  LOGIN_USER,
  ERROR_LOGIN_USER,
  START_LOGIN_USER
} from '../actions/login'

let initialState = {
  email: '',
  password: '',
  startLogin: false,
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
    case LOGIN_USER:
      return {
        ...state,
        startLogin: false,
        emailError: false,
        passwordError: false
      }
    case START_LOGIN_USER:
      return {
        ...state,
        startLogin: true,
        emailError: false,
        passwordError: false
      }
    case ERROR_LOGIN_USER:
      return {
        ...state,
        startLogin: false,
        emailError: true,
        passwordError: true
      }
    default:
      return state
  }
}
