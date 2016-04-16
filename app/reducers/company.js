import {
  START_FETCH_COMPANY,
  ERROR_FETCH_COMPANY,
  FETCH_COMPANY,
  START_FETCH_COMPANY_VACANCIES,
  ERROR_FETCH_COMPANY_VACANCIES,
  FETCH_COMPANY_VACANCIES
} from '../actions/company'

let initialState = {
  data: null,
  startFetch: false,
  errorFetch: false,
  vacancies: null,
  startFetchVacancy: false,
  errorFetchVacancy: false
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_COMPANY:
      return {
        ...state,
        data: action.data,
        startFetch: false,
        errorFetch: false
      }
    case START_FETCH_COMPANY:
      return {
        ...initialState,
        data: null,
        startFetch: true,
        errorFetch: false
      }
    case ERROR_FETCH_COMPANY:
      return {
        ...state,
        data: null,
        startFetch: false,
        errorFetch: true
      }
    case FETCH_COMPANY_VACANCIES:
      return {
        ...state,
        vacancies: action.data,
        startFetchVacancy: false,
        errorFetchVacancy: false
      }
    case START_FETCH_COMPANY_VACANCIES:
      return {
        ...state,
        vacancies: null,
        startFetchVacancy: true,
        errorFetchVacancy: false
      }
    case ERROR_FETCH_COMPANY_VACANCIES:
      return {
        ...state,
        vacancies: null,
        startFetchVacancy: false,
        errorFetchVacancy: true
      }
    default:
      return state
  }
}
