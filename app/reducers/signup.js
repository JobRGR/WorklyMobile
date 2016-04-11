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
  SET_COMPANY
} from '../actions/signup'

let initialState = {
  email: '',
  name: '',
  confirm: '',
  password: '',
  type: STUDENT,
  startSignup: false,
  errorSignup: false
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_SIGNUP_EMAIL:
      return {
        ...state,
        email: action.data
      }
    case SET_SIGNUP_PASSWORD:
      return {
        ...state,
        password: action.data
      }
    case SET_SIGNUP_CONFIRM:
      return {
        ...state,
        confirm: action.data
      }
    case SET_SIGNUP_NAME:
      return {
        ...state,
        name: action.data
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
    default:
      return state
  }
}
