import {
  UPDATE_NAME,
  UPDATE_CITY,
  UPDATE_ABOUT,
  UPDATE_SKILL,
  NAME_REQUIRED,
  CREATE_VACANCY,
  START_CREATE_VACANCY,
  ERROR_CREATE_VACANCY,
  ADD_SKILL,
  REMOVE_SKILL
} from '../actions/create_vacancy'

let initialState = {
  name: '',
  about: '',
  skill: '',
  skills: [],
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
    case UPDATE_SKILL:
      return {
        ...state,
        skill: action.data
      }
    case ADD_SKILL:
      return {
        ...state,
        skill: '',
        skills: [...state.skills, action.data]
      }
    case REMOVE_SKILL:
      return {
        ...state,
        skills: state.skills.filter((_, index) => index != action.data)
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
