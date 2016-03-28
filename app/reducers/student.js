import {
  LOGIN_STUDENT,
  SIGNUP_STUDENT,
  FETCH_STUDENT,
  START_SIGNUP_STUDENT,
  START_LOGIN_STUDENT,
  START_FETCH_STUDENT,
  ERROR_FETCH_STUDENT,
  ERROR_LOGIN_STUDENT,
  ERROR_SIGNUP_STUDENT,
  LOGOUT_STUDENT
} from '../actions/student'

let initialState = {
  data: null,
  startLogin: false,
  errorLogin: false,
  errorFetch: false,
  startFetch: false,
  errorSignup: false,
  startSignup: false
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case LOGIN_STUDENT:
      return {
        ...state,
        data: action.data,
        startLogin: false,
        errorLogin: false
      }
    case START_LOGIN_STUDENT:
      return {
        ...state,
        startLogin: true,
        errorLogin: false
      }
    case ERROR_LOGIN_STUDENT:
      return {
        ...state,
        startLogin: false,
        errorLogin: true
      }

    case SIGNUP_STUDENT:
      return {
        ...state,
        data: action.data,
        startSignup: false,
        errorSignup: false
      }
    case START_SIGNUP_STUDENT:
      return {
        ...state,
        startSignup: true,
        errorSignup: false
      }
    case ERROR_SIGNUP_STUDENT:
      return {
        ...state,
        startSignup: false,
        errorSignup: true
      }

    case FETCH_STUDENT:
      return {
        ...state,
        data: action.data,
        startFetch: false,
        errorFetch: false
      }
    case START_FETCH_STUDENT:
      return {
        ...state,
        startFetch: true,
        errorFetch: false
      }
    case ERROR_FETCH_STUDENT:
      return {
        ...state,
        startFetch: false,
        errorFetch: true
      }

    default:
      return state
  }
}
