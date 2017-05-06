import ClientApi from '../services/client_api'
import {Actions} from '../react-native-redux-router'
import {addVacancy} from './vacancies'
import {addVacancy as addCompanyVacancy} from './company_vacancies'

export const UPDATE_NAME = 'UPDATE_NAME'
export const UPDATE_ABOUT = 'UPDATE_ABOUT'
export const UPDATE_SKILL = 'UPDATE_SKILL'
export const UPDATE_CITY = 'UPDATE_CITY'

export const NAME_REQUIRED = 'NAME_REQUIRED'

export const ADD_SKILL = 'ADD_SKILL'
export const REMOVE_SKILL = 'REMOVE_SKILL'

export const CREATE_VACANCY = 'CREATE_VACANCY'
export const START_CREATE_VACANCY = 'START_CREATE_VACANCY'
export const ERROR_CREATE_VACANCY = 'ERROR_CREATE_VACANCY'

export let updateName = data => ({type: UPDATE_NAME, data})
export let updateAbout = data => ({type: UPDATE_ABOUT, data})
export let updateSkill = data => ({type: UPDATE_SKILL, data})
export let updateCity = data => ({type: UPDATE_CITY, data})

export let addSkill = data => ({type: ADD_SKILL, data})
export let removeSkill = data => ({type: REMOVE_SKILL, data})

export let createVacancy = (body, company) => async dispatch => {
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
    const vacancy = {
      ...data.vacancy,
      company,
      city: {
        _id: data.vacancy.city,
        name: body.city
      },
      skills: body.skills.map((name, index) => ({
        _id: data.vacancy.skills[index],
        name
      }))
    }
    dispatch(addCompanyVacancy(vacancy))
    dispatch(addVacancy(vacancy))
    Actions.feed()
    dispatch({type: CREATE_VACANCY})
  }
  catch (err) {
    console.log(err)
    dispatch({type: ERROR_CREATE_VACANCY})
  }
}
