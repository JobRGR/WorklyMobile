import ClientApi from '../services/client_api'
import {Actions} from 'react-native-redux-router'

export const SET_USER = 'SET_USER'
export const LOGOUT_USER = 'LOGOUT_USER'

export let logoutUser = body => dispatch => {
  dispatch({type: LOGOUT_USER})
  ClientApi
    .logout()
    .then(_ => Actions.home())
}