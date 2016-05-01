import {
  FETCH_STUDENTS,
  START_FETCH_STUDENTS,
  ERROR_FETCH_STUDENTS,
  SET_CURRENT_STUDENT,
  UPDATE_COUNT_STUDENTS
} from '../actions/students'

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
    case FETCH_STUDENTS:
      return {
        data: action.data,
        error: false,
        loading: false,
        count
      }
    case START_FETCH_STUDENTS:
      return {
        ...state,
        error: false,
        loading: true
      }
    case ERROR_FETCH_STUDENTS:
      return {
        ...state,
        error: true,
        loading: false
      }
    case SET_CURRENT_STUDENT:
      return {
        ...state,
        current: action.data
      }
    case UPDATE_COUNT_STUDENTS:
      return {
        ...state,
        count: state.count + count
      }
    default:
      return state
  }
}
