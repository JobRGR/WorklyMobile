import {
  FETCH_COMPETENCE,
  START_FETCH_COMPETENCE,
  ERROR_FETCH_COMPETENCE,
} from '../actions/competence'

let initialState = {
  data: null,
  loading: false,
  error: false
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_COMPETENCE:
      return {
        data: action.data,
        error: false,
        loading: false
      }
    case START_FETCH_COMPETENCE:
      return {
        ...state,
        error: false,
        loading: true
      }
    case ERROR_FETCH_COMPETENCE:
      return {
        ...state,
        error: true,
        loading: false
      }
    default:
      return state
  }
}
