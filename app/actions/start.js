import ClientApi from '../services/client_api'
import {Actions} from '../react-native-redux-router'
import {SET_USER} from './user'

export const FETCH_USER = 'FETCH_USER'
export const START_FETCH_USER = 'START_FETCH_USER'
export const ERROR_FETCH_USER = 'ERROR_FETCH_USER'

export let fetchUser = () => dispatch => {
  dispatch({type: START_FETCH_USER})
  ClientApi
    .fetchUser()
    .then(({status, data}) => {
      if (status != 200 || !(data.student || data.company)) {
        throw data
      }
      dispatch({type: FETCH_USER})
      dispatch({type: SET_USER, data})
      Actions.feed()
    })
    .catch(err => {
      console.log(err)
      Actions.home()
      dispatch({type: ERROR_FETCH_USER})
    })
}
