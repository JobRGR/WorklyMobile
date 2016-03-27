import {combineReducers} from 'redux'
import {routerReducer} from 'react-native-redux-router'
import user from './user'
import login from './login'
import signup from './signup'

export default combineReducers({
  routerReducer,
  login,
  user,
  signup
})