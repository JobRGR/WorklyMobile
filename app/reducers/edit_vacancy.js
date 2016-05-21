import {
  UPDATE_EDIT_VACANCY_NAME,
  UPDATE_EDIT_VACANCY_ABOUT,
  UPDATE_EDIT_VACANCY_SKILL,
  UPDATE_EDIT_VACANCY_CITY,
  EDIT_VACANCY_NAME_REQUIRED,
  EDIT_VACANCY_ADD_SKILL,
  EDIT_VACANCY_REMOVE_SKILL,
  EDIT_VACANCY,
  START_EDIT_VACANCY,
  ERROR_EDIT_VACANCY,
  SET_EDIT_VACANCY
} from '../actions/edit_vacancy'

let initialState = {
  id: '',
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
    case SET_EDIT_VACANCY:
      return {
        ...initialState,
        ...action.data
      }
    case UPDATE_EDIT_VACANCY_NAME:
      return {
        ...state,
        name: action.data,
        errorName: false
      }
    case UPDATE_EDIT_VACANCY_CITY:
      return {
        ...state,
        city: action.data
      }
    case UPDATE_EDIT_VACANCY_ABOUT:
      return {
        ...state,
        about: action.data
      }
    case UPDATE_EDIT_VACANCY_SKILL:
      return {
        ...state,
        skill: action.data
      }
    case EDIT_VACANCY_ADD_SKILL:
      return {
        ...state,
        skill: '',
        skills: [...state.skills, action.data]
      }
    case EDIT_VACANCY_REMOVE_SKILL:
      return {
        ...state,
        skills: state.skills.filter((_, index) => index != action.data)
      }
    case EDIT_VACANCY_NAME_REQUIRED:
      return {
        ...state,
        errorName: true
      }
    case START_EDIT_VACANCY:
      return {
        ...state,
        error: false,
        loading: true
      }
    case ERROR_EDIT_VACANCY:
      return {
        ...state,
        error: true,
        loading: false
      }
    case EDIT_VACANCY:
      return initialState
    default:
      return state
  }
}
