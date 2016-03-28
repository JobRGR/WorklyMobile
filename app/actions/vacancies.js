import ClientApi from '../services/client_api'

export const FETCH_VACANCIES = 'FETCH_VACANCIES'
export const START_FETCH_VACANCIES = 'START_FETCH_VACANCIES'
export const ERROR_FETCH_VACANCIES = 'ERROR_FETCH_VACANCIES'

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
