import ClientApi from '../services/client_api'

export const SET_ROAD_MAP = 'SET_ROAD_MAP'
export const START_FETCH_ROAD_MAP = 'START_FETCH_ROAD_MAP'
export const ERROR_FETCH_ROAD_MAP = 'ERROR_FETCH_ROAD_MAP'

export let getRoadMap = id => dispatch => {
  dispatch({type: START_FETCH_ROAD_MAP})
  ClientApi
    .getRoadMap(id)
    .then(({status, data}) => {
      if (status !== 200 || !data.roadMaps) {
        throw data
      }
      dispatch({type: SET_ROAD_MAP, data: data.roadMaps})
    })
    .catch(err => {
      console.log(err)
      dispatch({type: ERROR_FETCH_ROAD_MAP})
    })
}