import ClientApi from '../services/client_api'
import {Actions} from 'react-native-redux-router'

export const LOGIN_STUDENT = 'LOGIN_STUDENT'
export const SIGNUP_STUDENT = 'SIGNUP_STUDENT'
export const FETCH_STUDENT = 'FETCH_STUDENT'

export const START_FETCH_STUDENT = 'START_FETCH_STUDENT'
export const START_LOGIN_STUDENT = 'START_LOGIN_STUDENT'
export const START_SIGNUP_STUDENT = 'START_SIGNUP_STUDENT'

export const ERROR_FETCH_STUDENT = 'ERROR_FETCH_STUDENT'
export const ERROR_LOGIN_STUDENT = 'ERROR_LOGIN_STUDENT'
export const ERROR_SIGNUP_STUDENT = 'ERROR_SIGNUP_STUDENT'

export const LOGOUT_STUDENT = 'LOGOUT_STUDENT'

export let fetchStudent = () => dispatch => {
  dispatch({type: START_FETCH_STUDENT})
  ClientApi
    .fetchStudent()
    .then(({status, data}) => {
      if (status != 200 || !data.student) {
        throw new Error('Fetch Error')
      }
      dispatch({type: FETCH_STUDENT, data: data.student})
      Actions.feed()
    })
    .catch(err => {
      console.log(err)
      Actions.home()
      dispatch({type: ERROR_FETCH_STUDENT})
    })
}

export let loginStudent = body => dispatch => {
  dispatch({type: START_LOGIN_STUDENT})
  ClientApi
    .loginStudent(body)
    .then(({status, data}) => {
      if (status != 200 || !data.student) {
        throw new Error(data)
      }
      dispatch({type: LOGIN_STUDENT, data: data.student})
      Actions.feed()
    })
    .catch(err => {
      console.log(err)
      dispatch({type: ERROR_LOGIN_STUDENT})
    })
}

export let signupStudent = body => dispatch => {
  dispatch({type: START_SIGNUP_STUDENT})
  ClientApi
    .signupStudent(body)
    .then(({status, data}) => {
      if (status != 200 || !data.student) {
        throw new Error(data)
      }
      dispatch({type: SIGNUP_STUDENT, data: data.student})
      Actions.feed()
    })
    .catch(err => {
      console.log(err)
      dispatch({type: ERROR_SIGNUP_STUDENT})
    })
}

export let logoutStudent = body => dispatch => {
  dispatch({type: LOGOUT_STUDENT})
  ClientApi
    .logout()
    .then(_ => Actions.home())
}