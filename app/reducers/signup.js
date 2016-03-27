import {
  SET_SIGNUP_EMAIL,
  SET_SIGNUP_PASSWORD,
  SET_SIGNUP_CONFIRM,
  SET_SIGNUP_NAME
} from '../actions/signup'

let initialState = {
  email: '',
  name: '',
  confirm: '',
  password: ''
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
    default:
      return state
  }
}
