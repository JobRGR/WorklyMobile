import ClientApi from '../services/client_api'
import {removeVacancy as removeFeedVacancy} from './vacancies'

export const START_FETCH_USER_COMPANY_VACANCIES = 'START_FETCH_USER_COMPANY_VACANCIES'
export const ERROR_FETCH_USER_COMPANY_VACANCIES = 'ERROR_FETCH_USER_COMPANY_VACANCIES'
export const FETCH_USER_COMPANY_VACANCIES = 'FETCH_USER_COMPANY_VACANCIES'

export const ADD_USER_COMPANY_VACANCY = 'ADD_USER_COMPANY_VACANCY'
export const REMOVE_USER_COMPANY_VACANCY = 'REMOVE_USER_COMPANY_VACANCY'
export const UPDATE_USER_COMPANY_COUNT = 'UPDATE_USER_COMPANY_COUNT'

export let fetchVacancies = companyName => async dispatch => {
  dispatch({type: START_FETCH_USER_COMPANY_VACANCIES})
  try {
    let {status, data} = await ClientApi.searchVacancy({companyName})
    if (status != 200 || !data.vacancies) {
      throw data
    }
    dispatch({type: FETCH_USER_COMPANY_VACANCIES, data: data.vacancies})
  }
  catch (err) {
    console.log(err)
    dispatch({type: ERROR_FETCH_USER_COMPANY_VACANCIES})
  }
}

export let removeVacancy = data => async dispatch => {
  dispatch({type: REMOVE_USER_COMPANY_VACANCY, data})
  dispatch(removeFeedVacancy(data))
  ClientApi.removeVacancy(data)
}

export let addVacancy = data => ({type: ADD_USER_COMPANY_VACANCY, data})
export let updateCount = ({type: UPDATE_USER_COMPANY_COUNT})