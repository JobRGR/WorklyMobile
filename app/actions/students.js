import ClientApi from '../services/client_api'

export const FETCH_STUDENTS = 'FETCH_STUDENTS'
export const START_FETCH_STUDENTS = 'START_FETCH_STUDENTS'
export const ERROR_FETCH_STUDENTS = 'ERROR_FETCH_STUDENTS'
export const UPDATE_COUNT_STUDENTS = 'UPDATE_COUNT_STUDENTS'

export const SET_CURRENT_STUDENTS = 'SET_CURRENT_VACANCY'

export let updateCount = ({type: UPDATE_COUNT_STUDENTS})
export let setCurrent = data => ({type: SET_CURRENT_STUDENTS, data})

export let fetchVacancies = () => dispatch => {
  dispatch({type: START_FETCH_STUDENTS})
  ClientApi
    .fetchStudents()
    .then(({status, data}) => {
      if (status != 200 || !data.students) {
        throw new Error(data)
      }
      dispatch({type: FETCH_STUDENTS, data: data.students})
    })
    .catch(err => {
      console.log(err)
      dispatch({type: ERROR_FETCH_STUDENTS})
    })
}
