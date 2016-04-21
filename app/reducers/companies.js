import {
  FETCH_COMPANIES,
  START_FETCH_COMPANIES,
  ERROR_FETCH_COMPANIES,
  UPDATE_COUNT_COMPANIES
} from '../actions/companies'

const count = 15

let initialState = {
  data: [],
  count,
  current: null,
  loading: false,
  error: false
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_COMPANIES:
      return {
        data: action.data,
        error: false,
        loading: false,
        count
      }
    case START_FETCH_COMPANIES:
      return {
        ...state,
        error: false,
        loading: true
      }
    case ERROR_FETCH_COMPANIES:
      return {
        ...state,
        error: true,
        loading: false
      }
    case UPDATE_COUNT_COMPANIES:
      return {
        ...state,
        count: state.count + count
      }
    default:
      return state
  }
}
