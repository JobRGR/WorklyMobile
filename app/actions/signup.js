import ClientApi from '../services/client_api'
import {Actions} from 'react-native-redux-router'
import {SET_USER} from './user'

const student = 'student'
const company = 'company'

const email = 'email'
const password = 'password'
const name = 'name'
const confirm = 'confirm'

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

export const SET_SIGNUP_NAME_ERROR = 'SET_SIGNUP_NAME_ERROR'
export const SET_SIGNUP_PASSWORD_ERROR = 'SET_SIGNUP_PASSWORD_ERROR'
export const SET_SIGNUP_EMAIL_ERROR = 'SET_SIGNUP_EMAIL_ERROR'
export const SET_SIGNUP_CONFIRM_ERROR = 'SET_SIGNUP_CONFIRM_ERROR'

export let setEmail = data => ({type: SET_SIGNUP_EMAIL, data})
export let setPassword = data => ({type: SET_SIGNUP_PASSWORD, data})
export let setConfirm = data => ({type: SET_SIGNUP_CONFIRM, data})
export let setName = data => ({type: SET_SIGNUP_NAME, data})

export let setStudent = {type: SET_STUDENT}
export let setCompany = {type: SET_COMPANY}


export let signupStudent = body => dispatch => {
  if (!checkUser(body, dispatch, student)) {
    return dispatch({type: ERROR_SIGNUP})
  }
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
  if (!checkUser(body, dispatch, company)) {
    return dispatch({type: ERROR_SIGNUP})
  }
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

function required(field, user) {
  const {true: type} = {
    [field == email]: SET_SIGNUP_EMAIL_ERROR,
    [field == name]: SET_SIGNUP_NAME_ERROR,
    [field == password]: SET_SIGNUP_PASSWORD_ERROR,
    [field == confirm]: SET_SIGNUP_CONFIRM_ERROR
  }
  const {true: data} = {
    [field == email]: 'Електронна пошта необхідна',
    [field == name]: user == student ? 'Ім\'я та Прізвище необхідні' : 'Назва необхідна',
    [field == password]: 'Пароль необхіний',
    [field == confirm]: 'Повтор паролю необхідний'
  }
  return {type, data}
}

function checkUser(body, dispatch, user) {
  const fields = [email, password, name, confirm]
  let valid = true
  fields.forEach(field => {
    if (!body[field].length) {
      dispatch(required(field, user))
      valid = false
      return
    }
    if (field == email) {
      const regExp =  /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-?[a-zA-Z0-9])*(\.[a-zA-Z](-?[a-zA-Z0-9])*)+$/
      valid = regExp.test(body[field])
      !valid && dispatch({type: SET_SIGNUP_EMAIL_ERROR, data: 'Електронна пошта не валідна'})
    }
  })
  if (valid && body[confirm] != body[password]) {
    dispatch({type: SET_SIGNUP_CONFIRM_ERROR, data: 'Повтор паролю не вірний'})
    valid = false
  }
  return valid
}
