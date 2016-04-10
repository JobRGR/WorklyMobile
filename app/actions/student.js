import ClientApi from '../services/client_api'
import {Actions} from 'react-native-redux-router'

import {SET_USER} from './user'

export const START_SIGNUP_STUDENT = 'START_SIGNUP_STUDENT'
export const ERROR_SIGNUP_STUDENT = 'ERROR_SIGNUP_STUDENT'

export let signupStudent = body => dispatch => {
  dispatch({type: START_SIGNUP_STUDENT})
  ClientApi
    .signupStudent(body)
    .then(({status, data}) => {
      if (status != 200 || !data.student) {
        throw data
      }
      dispatch({type: SET_USER, data})
      Actions.feed()
    })
    .catch(err => {
      console.log(err)
      dispatch({type: ERROR_SIGNUP_STUDENT})
    })
}
