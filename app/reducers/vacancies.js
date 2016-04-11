import {
  FETCH_VACANCIES,
  START_FETCH_VACANCIES,
  ERROR_FETCH_VACANCIES,
  SET_CURRENT_VACANCY,
  UPDATE_COUNT
} from '../actions/vacancies'

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
    case FETCH_VACANCIES:
      return {
        data: action.data,
        error: false,
        loading: false,
        count
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
    case SET_CURRENT_VACANCY:
      let [current] = state.data.filter(({_id}) => _id == action.data)
      return {
        ...state,
        current
      }
    case UPDATE_COUNT:
      return {
        ...state,
        count: state.count + count
      }
    default:
      return state
  }
}
