import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reducer from '../reducers/index'
import createLogger from 'redux-logger'

const logger = createLogger()

export default createStore(
  reducer,
  applyMiddleware(thunk, logger)
)