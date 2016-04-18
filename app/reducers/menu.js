import {
  OPEN_MENU,
  CLOSE_MENU
} from '../actions/menu'

let initialState = false

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case OPEN_MENU:
      return true
    case CLOSE_MENU:
      return false
    default:
      return state
  }
}
