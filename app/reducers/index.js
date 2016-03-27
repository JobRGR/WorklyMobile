import {combineReducers} from 'redux'
import {routerReducer} from 'react-native-redux-router'
import user from './user'
import login from './login'
import signup from './signup'
import vacancies from './vacancies'

export default combineReducers({
  routerReducer,
  login,
  user,
  signup,
  vacancies
})