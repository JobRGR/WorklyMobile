import ClientApi from '../services/client_api'
import {Actions} from 'react-native-redux-router'
import {SET_USER} from './user'

export const SET_SIGNUP_EMAIL = 'SET_SIGNUP_EMAIL'
export const SET_SIGNUP_PASSWORD = 'SET_SIGNUP_PASSWORD'
export const SET_SIGNUP_CONFIRM = 'SET_SIGNUP_CONFIRM'
export const SET_SIGNUP_NAME = 'SET_SIGNUP_NAME'

export const SIGNUP = 'SIGNUP'
export const START_SIGNUP = 'START_SIGNUP'
export const ERROR_SIGNUP = 'ERROR_SIGNUP'

export const STUDENT = 'STUDENT'
export const COMPANY = 'COMPANY'
export const SET_STUDENT = 'SET_STUDENT'
export const SET_COMPANY = 'SET_COMPANY'

export let setEmail = data => ({type: SET_SIGNUP_EMAIL, data})
export let setPassword = data => ({type: SET_SIGNUP_PASSWORD, data})
export let setConfirm = data => ({type: SET_SIGNUP_CONFIRM, data})
export let setName = data => ({type: SET_SIGNUP_NAME, data})

export let setStudent = {type: SET_STUDENT}
export let setCompany = {type: SET_COMPANY}

export let signupStudent = body => dispatch => {
  dispatch({type: START_SIGNUP})
  ClientApi
    .signupStudent(body)
    .then(({status, data}) => {
      if (status != 200 || !data.student) {
        throw data
      }
      dispatch({type: SIGNUP})
      dispatch({type: SET_USER, data})
      Actions.feed()
    })
    .catch(err => {
      console.log(err)
      dispatch({type: ERROR_SIGNUP})
    })
}

export let signupCompany = body => dispatch => {
  dispatch({type: START_SIGNUP})
  ClientApi
    .signupCompany(body)
    .then(({status, data}) => {
      if (status != 200 || !data.company) {
        throw data
      }
      dispatch({type: SIGNUP})
      dispatch({type: SET_USER, data})
      Actions.feed()
    })
    .catch(err => {
      console.log(err)
      dispatch({type: ERROR_SIGNUP})
    })
}
