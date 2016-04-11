import {
  LOGOUT_USER,
  SET_USER
} from '../actions/user'

let initialState = {
  student: null,
  company: null
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
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
