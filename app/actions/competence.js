import ClientApi from '../services/client_api'

export const FETCH_COMPETENCE = 'FETCH_COMPETENCE'
export const START_FETCH_COMPETENCE = 'START_FETCH_COMPETENCE'
export const ERROR_FETCH_COMPETENCE = 'ERROR_FETCH_COMPETENCE'


export let fetchCompetence = value => dispatch => {
  dispatch({type: START_FETCH_COMPETENCE})
  ClientApi
    .fetchCompetence(value)
    .then(({status, data}) => {
      if (status != 200 || !data.competence) {
        throw new Error(data)
      }
      dispatch({type: FETCH_COMPETENCE, data: data.competence})
    })
    .catch(err => {
      console.log(err)
      dispatch({type: ERROR_FETCH_COMPETENCE})
    })
}
