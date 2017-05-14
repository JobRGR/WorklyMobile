import {
  LOGOUT_USER,
  SET_USER,
  UPDATE_USER,
  ERROR_UPDATE_USER
} from '../actions/user'

let initialState = {
  student: null,
  company: null,
  loading: false
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        company: action.data.company || null,
        student: action.data.student || null,
        loading: false
      }
    case UPDATE_USER:
      return {
        ...state,
        loading: true
      }
    case ERROR_UPDATE_USER:
      return {
        ...state,
        loading: false
      }
    case LOGOUT_USER:
      return initialState

    default:
      return state
  }
}
