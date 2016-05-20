import {
  UPDATE_NAME,
  UPDATE_CITY,
  UPDATE_ABOUT,
  UPDATE_SKILLS,
  NAME_REQUIRED,
  CREATE_VACANCY,
  START_CREATE_VACANCY,
  ERROR_CREATE_VACANCY
} from '../actions/create_vacancy'

let initialState = {
  name: '',
  about: '',
  skills: '',
  city: '',
  loading: false,
  error: false,
  errorName: false
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_NAME:
      return {
        ...state,
        name: action.data,
        errorName: false
      }
    case UPDATE_CITY:
      return {
        ...state,
        city: action.data
      }
    case UPDATE_ABOUT:
      return {
        ...state,
        about: action.data
      }
    case UPDATE_SKILLS:
      return {
        ...state,
        skills: action.data
      }
    case NAME_REQUIRED:
      return {
        ...state,
        errorName: true
      }
    case START_CREATE_VACANCY:
      return {
        ...state,
        error: false,
        loading: true
      }
    case ERROR_CREATE_VACANCY:
      return {
        ...state,
        error: true,
        loading: false
      }
    case CREATE_VACANCY:
      return state
    default:
      return state
  }
}
