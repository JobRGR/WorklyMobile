import {
  SET_SIGNUP_EMAIL,
  SET_SIGNUP_PASSWORD,
  SET_SIGNUP_CONFIRM,
  SET_SIGNUP_NAME,
  SIGNUP,
  START_SIGNUP,
  ERROR_SIGNUP,
  STUDENT,
  SET_STUDENT,
  COMPANY,
  SET_COMPANY,
  SET_SIGNUP_EMAIL_ERROR,
  SET_SIGNUP_NAME_ERROR,
  SET_SIGNUP_PASSWORD_ERROR,
  SET_SIGNUP_CONFIRM_ERROR
} from '../actions/signup'

let initialState = {
  email: '',
  name: '',
  confirm: '',
  password: '',
  type: STUDENT,
  startSignup: false,
  errorSignup: false,
  nameError: null,
  passwordError: null,
  emailError: null,
  confirmError: null
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_SIGNUP_EMAIL:
      return {
        ...state,
        email: action.data,
        emailError: null
      }
    case SET_SIGNUP_PASSWORD:
      return {
        ...state,
        password: action.data,
        passwordError: null
      }
    case SET_SIGNUP_CONFIRM:
      return {
        ...state,
        confirm: action.data,
        confirmError: null
      }
    case SET_SIGNUP_NAME:
      return {
        ...state,
        name: action.data,
        nameError: null
      }
    case START_SIGNUP:
      return {
        ...state,
        startSignup: true,
        errorSignup: false
      }
    case ERROR_SIGNUP:
      return {
        ...state,
        startSignup: false,
        errorSignup: true
      }
    case SIGNUP:
      return {
        ...state,
        startSignup: false,
        errorSignup: false
      }
    case SET_STUDENT:
      return state.startSignup ? state : {...initialState, type: STUDENT}
    case SET_COMPANY:
      return state.startSignup ? state : {...initialState, type: COMPANY}
    case SET_SIGNUP_EMAIL_ERROR:
      return {
        ...state,
        emailError: action.data
      }
    case SET_SIGNUP_NAME_ERROR:
      return {
        ...state,
        nameError: action.data
      }
    case SET_SIGNUP_PASSWORD_ERROR:
      return {
        ...state,
        passwordError: action.data
      }
    case SET_SIGNUP_CONFIRM_ERROR: {
      return {
        ...state,
        confirmError: action.data
      }
    }
    default:
      return state
  }
}
