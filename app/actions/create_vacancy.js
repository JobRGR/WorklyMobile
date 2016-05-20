import ClientApi from '../services/client_api'
import {Actions} from 'react-native-redux-router'

export const UPDATE_NAME = 'UPDATE_NAME'
export const UPDATE_ABOUT = 'UPDATE_ABOUT'
export const UPDATE_SKILLS = 'UPDATE_SKILLS'
export const UPDATE_CITY = 'UPDATE_CITY'

export const NAME_REQUIRED = 'NAME_REQUIRED'

export const CREATE_VACANCY = 'CREATE_VACANCY'
export const START_CREATE_VACANCY = 'START_CREATE_VACANCY'
export const ERROR_CREATE_VACANCY = 'ERROR_CREATE_VACANCY'

export let updateName = data => ({type: UPDATE_NAME, data})
export let updateAbout = data => ({type: UPDATE_ABOUT, data})
export let updateSkills = data => ({type: UPDATE_SKILLS, data})
export let updateCity = data => ({type: UPDATE_CITY, data})

export let createVacancy = body => async dispatch => {
  let isName = body.name && body.name.length
  if (!isName) {
    return dispatch({type: NAME_REQUIRED})
  }
  dispatch({type: START_CREATE_VACANCY})
  try {
    const {status, data} = await ClientApi.createVacancy(body)
    if (status != 200 || !data) {
      throw data
    }
    Actions.feed()
    dispatch({type: CREATE_VACANCY})
  }
  catch (err) {
    console.log(err)
    dispatch({type: ERROR_CREATE_VACANCY})
  }
}
