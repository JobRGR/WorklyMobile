import ClientApi from '../services/client_api'
import {Actions} from '../react-native-redux-router'
import {REMOVE_CATCH} from './vacancies'
import {setStudent} from './students'
import {setCompany} from './companies'

export const SET_USER = 'SET_USER'
export const LOGOUT_USER = 'LOGOUT_USER'
export const UPDATE_USER = 'UPDATE_USER'
export const ERROR_UPDATE_USER = 'ERROR_UPDATE_USER'

export let setUser = data => ({type: SET_USER, data})

export let logoutUser = body => dispatch => {
  dispatch({type: LOGOUT_USER})
  dispatch({type: REMOVE_CATCH})
  Actions.home()
  ClientApi.logout()
}

export let updateStudent = (id, body) => async dispatch => {
  try {
    dispatch({type: UPDATE_USER})
    const {status: tmpStatus, data: tmpData} = await ClientApi.updateStudent(id, body)
    if (tmpStatus != 200 || !tmpData.student) {
      throw tmpData
    }
    const {status, data} = await ClientApi.fetchStudent(id)
    if (status != 200 || !data.student) {
      throw data
    }
    dispatch(setUser(data))
    dispatch(setStudent(data.student))
  }
  catch (err) {
    console.log(err)
    dispatch({type: ERROR_UPDATE_USER})
  }
}

export let updateCompany = (id, body) => async dispatch => {
  try {
    dispatch({type: UPDATE_USER})
    const {status: tmpStatus, data: tmpData} = await ClientApi.updateCompany(id, body)
    if (tmpStatus != 200 || !tmpData.company) {
      throw tmpData
    }
    const {status, data} = await ClientApi.fetchCompany(id)
    if (status != 200 || !data.company) {
      throw data
    }
    dispatch(setUser(data))
    dispatch(setCompany(data.company))
  }
  catch (err) {
    console.log(err)
    dispatch({type: ERROR_UPDATE_USER})
  }
}