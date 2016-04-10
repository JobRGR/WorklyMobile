import ClientApi from '../services/client_api'
import {Actions} from 'react-native-redux-router'

export const LOGIN_USER = 'LOGIN_USER'
export const SET_USER = 'SET_USER'
export const FETCH_USER = 'FETCH_USER'

export const START_FETCH_USER = 'START_FETCH_USER'
export const START_LOGIN_USER = 'START_LOGIN_USER'

export const ERROR_FETCH_USER = 'ERROR_FETCH_USER'
export const ERROR_LOGIN_USER = 'ERROR_LOGIN_USER'

export const LOGOUT_USER = 'LOGOUT_USER'

export let fetchUser = () => dispatch => {
  dispatch({type: START_FETCH_USER})
  ClientApi
    .fetchUser()
    .then(({status, data}) => {
      if (status != 200 || !(data.student || data.company)) {
        throw data
      }
      dispatch({type: FETCH_USER, data})
      Actions.feed()
    })
    .catch(err => {
      console.log(err)
      Actions.home()
      dispatch({type: ERROR_FETCH_USER})
    })
}

export let loginUser = body => dispatch => {
  dispatch({type: START_LOGIN_USER})
  ClientApi
    .loginUser(body)
    .then(({status, data}) => {
      if (status != 200 || !(data.student || data.company)) {
        throw data
      }
      dispatch({type: LOGIN_USER, data})
      Actions.feed()
    })
    .catch(err => {
      console.log(err)
      dispatch({type: ERROR_LOGIN_USER})
    })
}

export let logoutUser = body => dispatch => {
  dispatch({type: LOGOUT_USER})
  ClientApi
    .logout()
    .then(_ => Actions.home())
}