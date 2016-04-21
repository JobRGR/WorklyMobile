import ClientApi from '../services/client_api'

export const FETCH_COMPANIES = 'FETCH_COMPANIES'
export const START_FETCH_COMPANIES = 'START_FETCH_COMPANIES'
export const ERROR_FETCH_COMPANIES = 'ERROR_FETCH_COMPANIES'
export const UPDATE_COUNT_COMPANIES = 'UPDATE_COUNT_COMPANIES'

export let updateCount = ({type: UPDATE_COUNT_COMPANIES})
export let fetchCompanies = () => dispatch => {
  dispatch({type: START_FETCH_COMPANIES})
  ClientApi
    .fetchCompanies()
    .then(({status, data}) => {
      if (status != 200 || !data.companies) {
        throw new Error(data)
      }
      dispatch({type: FETCH_COMPANIES, data: data.companies})
    })
    .catch(err => {
      console.log(err)
      dispatch({type: ERROR_FETCH_COMPANIES})
    })
}
