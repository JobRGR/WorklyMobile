import {
  START_FETCH_USER_COMPANY_VACANCIES,
  ERROR_FETCH_USER_COMPANY_VACANCIES,
  FETCH_USER_COMPANY_VACANCIES,
  ADD_USER_COMPANY_VACANCY,
  UPDATE_USER_COMPANY_COUNT,
  REMOVE_USER_COMPANY_VACANCY,
  UPDATE_USER_COMPANY_VACANCY
} from '../actions/company_vacancies'

const count = 15

let initialState = {
  vacancies: null,
  loading: false,
  error: false,
  count
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_USER_COMPANY_VACANCIES:
      return {
        ...state,
        vacancies: action.data,
        loading: false,
        error: false
      }
    case START_FETCH_USER_COMPANY_VACANCIES:
      return {
        ...state,
        vacancies: null,
        loading: true,
        error: false,
        count
      }
    case ERROR_FETCH_USER_COMPANY_VACANCIES:
      return {
        ...state,
        vacancies: null,
        loading: false,
        error: true
      }
    case ADD_USER_COMPANY_VACANCY:
      return {
        ...state,
        vacancies: state.vacancies ? [action.data, ...state.vacancies] : null
      }
    case UPDATE_USER_COMPANY_COUNT:
      return {
        ...state,
        count: state.count + count
      }
    case REMOVE_USER_COMPANY_VACANCY:
      return {
        ...state,
        vacancies: state.vacancies.filter(({_id}) => _id != action.data)
      }
    case UPDATE_USER_COMPANY_VACANCY:
      const {id, data} = action.data
      return {
        ...state,
        vacancies: state.vacancies.map(vacancy => vacancy._id == id ? {...vacancy, ...data} : vacancy)
      }
    default:
      return state
  }
}
