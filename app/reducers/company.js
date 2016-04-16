import {
  START_FETCH_COMPANY,
  ERROR_FETCH_COMPANY,
  FETCH_COMPANY
} from '../actions/company'

let initialState = {
  data: null,
  startFetch: false,
  errorFetch: false
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_COMPANY:
      return {
        ...initialState,
        data: action.data
      }
    case START_FETCH_COMPANY:
      return {
        ...state,
        startFetch: true,
        errorFetch: false
      }
    case ERROR_FETCH_COMPANY:
      return {
        ...state,
        startFetch: false,
        errorFetch: true
      }
    default:
      return state
  }
}
