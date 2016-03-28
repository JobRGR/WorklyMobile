import {combineReducers} from 'redux'
import {routerReducer} from 'react-native-redux-router'
import student from './student'
import login from './login'
import signup from './signup'
import vacancies from './vacancies'

export default combineReducers({
  routerReducer,
  login,
  student,
  signup,
  vacancies
})