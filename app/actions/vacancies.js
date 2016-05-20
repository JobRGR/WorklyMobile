import ClientApi from '../services/client_api'

export const FETCH_VACANCIES = 'FETCH_VACANCIES'
export const START_FETCH_VACANCIES = 'START_FETCH_VACANCIES'
export const ERROR_FETCH_VACANCIES = 'ERROR_FETCH_VACANCIES'
export const UPDATE_COUNT_VACANCIES = 'UPDATE_COUNT_VACANCIES'
export const ADD_VACANCY = 'ADD_VACANCY'

export const SET_CURRENT_VACANCY = 'SET_CURRENT_VACANCY'

export let updateCount = ({type: UPDATE_COUNT_VACANCIES})
export let setCurrent = data => ({type: SET_CURRENT_VACANCY, data})
export let addVacancy = data => ({type: ADD_VACANCY, data})

export let fetchVacancies = () => dispatch => {
  dispatch({type: START_FETCH_VACANCIES})
  ClientApi
    .fetchVacancies()
    .then(({status, data}) => {
      if (status != 200 || !data.vacancies) {
        throw new Error(data)
      }
      dispatch({type: FETCH_VACANCIES, data: data.vacancies})
    })
    .catch(err => {
      console.log(err)
      dispatch({type: ERROR_FETCH_VACANCIES})
    })
}
