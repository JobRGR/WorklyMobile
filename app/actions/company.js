import ClientApi from '../services/client_api'
import {Actions} from 'react-native-redux-router'

export const FETCH_COMPANY = 'FETCH_COMPANY'
export const ERROR_FETCH_COMPANY = 'ERROR_FETCH_COMPANY'
export const START_FETCH_COMPANY = 'START_FETCH_COMPANY'

export const START_FETCH_COMPANY_VACANCIES = 'START_FETCH_COMPANY_VACANCIES'
export const ERROR_FETCH_COMPANY_VACANCIES = 'ERROR_FETCH_COMPANY_VACANCIES'
export const FETCH_COMPANY_VACANCIES = 'FETCH_COMPANY_VACANCIES'

export let fetchCompany = (id, title) => async dispatch => {
  dispatch({type: START_FETCH_COMPANY})
  Actions.company({title})
  try {
    let {status, data} = await ClientApi.fetchCompany(id)
    if (status != 200 || !data.company) {
      throw data
    }
    dispatch({type: FETCH_COMPANY, data: data.company})
    fetchVacancies(title, dispatch)
  }
  catch (err) {
    console.log(err)
    dispatch({type: ERROR_FETCH_COMPANY})
  }
}

export let fetchVacancies = async (companyName, dispatch) => {
  dispatch({type: START_FETCH_COMPANY_VACANCIES})
  try {
    let {status, data} = await ClientApi.searchVacancy({companyName})
    if (status != 200 || !data.vacancies) {
      throw data
    }
    dispatch({type: FETCH_COMPANY_VACANCIES, data: data.vacancies})
  }
  catch (err) {
    console.log(err)
    dispatch({type: ERROR_FETCH_COMPANY_VACANCIES})
  }
}