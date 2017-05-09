import {
  START_FETCH_ROAD_MAP,
  ERROR_FETCH_ROAD_MAP,
  SET_ROAD_MAP
} from '../actions/road_map'

let initialState = {
  data: null,
  loading: false,
  error: false
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case START_FETCH_ROAD_MAP:
      return {
        ...initialState,
        loading: true
      }
    case ERROR_FETCH_ROAD_MAP:
      return {
        ...initialState,
        error: true
      }
    case SET_ROAD_MAP:
      return {
        ...initialState,
        data: action.data
      }
    default:
      return state
  }
}
