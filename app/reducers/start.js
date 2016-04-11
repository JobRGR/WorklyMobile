import {
  START_FETCH_USER,
  ERROR_FETCH_USER,
  FETCH_USER
} from '../actions/start'

let initialState = {
  startFetch: false,
  errorFetch: false
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_USER:
      return initialState
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
    default:
      return state
  }
}
