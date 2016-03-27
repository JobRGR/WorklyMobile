import {SET_LOGIN_EMAIL, SET_LOGIN_PASSWORD} from '../actions/login'

let initialState = {
  email: '',
  password: ''
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_LOGIN_EMAIL:
      return {
        ...state,
        email: action.data
      }
    case SET_LOGIN_PASSWORD:
      return {
        ...state,
        password: action.data
      }
    default:
      return state
  }
}
