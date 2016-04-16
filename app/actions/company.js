import ClientApi from '../services/client_api'
import {Actions} from 'react-native-redux-router'

export const FETCH_COMPANY = 'FETCH_COMPANY'
export const ERROR_FETCH_COMPANY = 'ERROR_FETCH_COMPANY'
export const START_FETCH_COMPANY = 'START_FETCH_COMPANY'

export let fetchCompany = (id, title) => async dispatch => {
  dispatch({type: START_FETCH_COMPANY})
  Actions.company({title})
  try {
    let {status, data} = await ClientApi.fetchCompany(id)
    if (status != 200 || !data.company) {
      throw data
    }
    dispatch({type: FETCH_COMPANY, data: data.company})
  }
  catch (err) {
    console.log(err)
    dispatch({type: ERROR_FETCH_COMPANY})
  }
}