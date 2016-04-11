import ClientApi from '../services/client_api'
import {Actions} from 'react-native-redux-router'
import {SET_USER} from './user'

export const SET_LOGIN_EMAIL = 'SET_LOGIN_EMAIL'
export const SET_LOGIN_PASSWORD = 'SET_LOGIN_PASSWORD'

export const LOGIN_USER = 'LOGIN_USER'
export const START_LOGIN_USER = 'START_LOGIN_USER'
export const ERROR_LOGIN_USER = 'ERROR_LOGIN_USER'

export let setEmail = data => ({type: SET_LOGIN_EMAIL, data})
export let setPassword = data => ({type: SET_LOGIN_PASSWORD, data})

export let loginUser = body => dispatch => {
  dispatch({type: START_LOGIN_USER})
  ClientApi
    .loginUser(body)
    .then(({status, data}) => {
      if (status != 200 || !(data.student || data.company)) {
        throw data
      }
      dispatch({type: LOGIN_USER})
      dispatch({type: SET_USER, data})
      Actions.feed()
    })
    .catch(err => {
      console.log(err)
      dispatch({type: ERROR_LOGIN_USER})
    })
}