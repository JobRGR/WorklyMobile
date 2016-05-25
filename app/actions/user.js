import ClientApi from '../services/client_api'
import {Actions} from 'react-native-redux-router'
import {REMOVE_CATCH} from './vacancies'

export const SET_USER = 'SET_USER'
export const LOGOUT_USER = 'LOGOUT_USER'

export let logoutUser = body => dispatch => {
  dispatch({type: LOGOUT_USER})
  dispatch({type: REMOVE_CATCH})
  Actions.home()
  ClientApi.logout()
}