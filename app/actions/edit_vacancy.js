import ClientApi from '../services/client_api'
import {Actions} from '../react-native-redux-router'
import {updateVacancy} from './vacancies'
import {updateVacancy as updateCompanyVacancy} from './company_vacancies'

export const UPDATE_EDIT_VACANCY_NAME = 'UPDATE_EDIT_VACANCY_NAME'
export const UPDATE_EDIT_VACANCY_ABOUT = 'UPDATE_EDIT_VACANCY_ABOUT'
export const UPDATE_EDIT_VACANCY_SKILL = 'UPDATE_EDIT_VACANCY_SKILL'
export const UPDATE_EDIT_VACANCY_CITY = 'UPDATE_EDIT_VACANCY_CITY'

export const EDIT_VACANCY_NAME_REQUIRED = 'UPDATE_EDIT_VACANCY_NAME_REQUIRED'

export const EDIT_VACANCY_ADD_SKILL = 'EDIT_VACANCY_ADD_SKILL'
export const EDIT_VACANCY_REMOVE_SKILL = 'EDIT_VACANCY_REMOVE_SKILL'

export const EDIT_VACANCY = 'EDIT_VACANCY'
export const START_EDIT_VACANCY = 'START_EDIT_VACANCY'
export const ERROR_EDIT_VACANCY = 'ERROR_EDIT_VACANCY'

export const SET_EDIT_VACANCY = 'SET_EDIT_VACANCY'

export let updateName = data => ({type: UPDATE_EDIT_VACANCY_NAME, data})
export let updateAbout = data => ({type: UPDATE_EDIT_VACANCY_ABOUT, data})
export let updateSkill = data => ({type: UPDATE_EDIT_VACANCY_SKILL, data})
export let updateCity = data => ({type: UPDATE_EDIT_VACANCY_CITY, data})

export let addSkill = data => ({type: EDIT_VACANCY_ADD_SKILL, data})
export let removeSkill = data => ({type: EDIT_VACANCY_REMOVE_SKILL, data})

export let setVacancy = ({name, about, skills, city, _id: id}) => {
  const data = {
    id,
    name, 
    about,
    city: city.name,
    skills: skills.map(({name}) => name)
  }
  return ({type: SET_EDIT_VACANCY, data})
}

export let editVacancy = (id, body, company) => async dispatch => {
  let isName = body.name && body.name.length
  if (!isName) {
    return dispatch({type: EDIT_VACANCY_NAME_REQUIRED})
  }
  dispatch({type: START_EDIT_VACANCY})
  try {
    const {status, data} = await ClientApi.updateVacancy(id, body)
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
    dispatch(updateVacancy(id, vacancy))
    dispatch(updateCompanyVacancy(id, vacancy))
    Actions.companyVacancies()
    dispatch({type: EDIT_VACANCY})
  }
  catch (err) {
    console.log(err)
    dispatch({type: ERROR_EDIT_VACANCY})
  }
}
