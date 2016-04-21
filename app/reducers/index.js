import {combineReducers} from 'redux'
import {routerReducer} from 'react-native-redux-router'
import login from './login'
import signup from './signup'
import user from './user'
import start from './start'
import vacancies from './vacancies'
import company from './company'
import menu from './menu'
import companies from './companies'

export default combineReducers({
  routerReducer,
  login,
  company,
  start,
  signup,
  user,
  vacancies,
  menu,
  companies
})