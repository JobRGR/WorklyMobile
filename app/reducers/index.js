import {combineReducers} from 'redux'
import {routerReducer} from 'react-native-redux-router'
import user from './user'

export default combineReducers({
  routerReducer,
  user
})