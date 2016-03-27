import {
  FETCH_VACANCIES,
  START_FETCH_VACANCIES,
  ERROR_FETCH_VACANCIES
} from '../actions/vacancies'

let initialState = {
  data: [],
  loading: false,
  error: false
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_VACANCIES:
      return {
        data: action.data,
        error: false,
        loading: false
      }
    case START_FETCH_VACANCIES:
      return {
        ...state,
        error: false,
        loading: true
      }
    case ERROR_FETCH_VACANCIES:
      return {
        ...state,
        error: true,
        loading: false
      }
    default:
      return state
  }
}
