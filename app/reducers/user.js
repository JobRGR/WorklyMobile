import {
  LOGIN_USER,
  FETCH_USER,
  START_FETCH_USER,
  START_LOGIN_USER,
  ERROR_FETCH_USER,
  ERROR_LOGIN_USER,
  LOGOUT_USER,
  SET_USER
} from '../actions/user'

let initialState = {
  student: null,
  company: null,
  startLogin: false,
  errorLogin: false,
  startFetch: false,
  errorFetch: false
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        company: action.data.company || null,
        student: action.data.student || null,
        startLogin: false,
        errorLogin: false
      }
    case START_LOGIN_USER:
      return {
        ...state,
        startLogin: true,
        errorLogin: false
      }
    case ERROR_LOGIN_USER:
      return {
        ...state,
        startLogin: false,
        errorLogin: true
      }
    case FETCH_USER:
      return {
        ...state,
        company: action.data.company || null,
        student: action.data.student || null,
        startFetch: false,
        errorFetch: false
      }
    case START_FETCH_USER:
      return {
        ...state,
        startFetch: true,
        errorFetch: false
      }
    case ERROR_FETCH_USER:
      return {
        ...state,
        startFetch: false,
        errorFetch: true
      }
    case SET_USER:
      return {
        ...state,
        company: action.data.company || null,
        student: action.data.student || null
      }
    case LOGOUT_USER:
      return initialState
    default:
      return state
  }
}
