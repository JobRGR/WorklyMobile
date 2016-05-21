import {
  FETCH_COMPANIES,
  START_FETCH_COMPANIES,
  ERROR_FETCH_COMPANIES,
  UPDATE_COUNT_COMPANIES,
  SET_COMPANY_SEARCH
} from '../actions/companies'

const count = 15

let initialState = {
  data: [],
  count,
  search: '',
  current: null,
  loading: false,
  error: false
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_COMPANIES:
      return {
        ...state,
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
    case SET_COMPANY_SEARCH:
      return {
        ...state,
        search: action.data
      }
    default:
      return state
  }
}
