import ClientApi from '../services/client_api'

export const FETCH_VACANCIES = 'FETCH_VACANCIES'
export const START_FETCH_VACANCIES = 'START_FETCH_VACANCIES'
export const ERROR_FETCH_VACANCIES = 'ERROR_FETCH_VACANCIES'
export const UPDATE_COUNT_VACANCIES = 'UPDATE_COUNT_VACANCIES'
export const ADD_VACANCY = 'ADD_VACANCY'
export const REMOVE_VACANCY = 'REMOVE_VACANCY'
export const SET_CURRENT_VACANCY = 'SET_CURRENT_VACANCY'
export const UPDATE_VACANCY = 'UPDATE_VACANCY'
export const SET_VACANCY_SEARCH = 'SET_VACANCY_SEARCH'
export const SUBSCRIBE_VACANCIES = 'SUBSCRIBE_VACANCIES'
export const START_SUBSCRIBE_VACANCIES = 'START_SUBSCRIBE_VACANCIES'
export const ERROR_SUBSCRIBE_VACANCIES = 'ERROR_SUBSCRIBE_VACANCIES'

export let setSearch = (data = '') => ({type: SET_VACANCY_SEARCH, data})
export let updateCount = ({type: UPDATE_COUNT_VACANCIES})
export let setCurrent = data => ({type: SET_CURRENT_VACANCY, data})
export let addVacancy = data => ({type: ADD_VACANCY, data})
export let removeVacancy = data => ({type: REMOVE_VACANCY, data})

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

export let subscribeVacancy = (id, body) => async dispatch => {
  dispatch({type: START_SUBSCRIBE_VACANCIES})
  ClientApi
    .subscribeVacancy(id, body)
    .then(({status, data}) => {
      if (status != 200 || !data.vacancy) {
        throw new Error(data)
      }
      dispatch({type: SUBSCRIBE_VACANCIES, data: id})
    })
    .catch(err => {
      console.log(err)
      dispatch({type: ERROR_SUBSCRIBE_VACANCIES})
    })
}
export let updateVacancy = (id, data) => ({type: UPDATE_VACANCY, data: {id, data}})
