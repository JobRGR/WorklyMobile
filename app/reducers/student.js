import {
  START_SIGNUP_STUDENT,
  ERROR_SIGNUP_STUDENT
} from '../actions/student'

let initialState = {
  errorSignup: false,
  startSignup: false
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
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
    default:
      return state
  }
}
