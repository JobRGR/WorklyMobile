import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducer from '../reducers/index'
import createLogger from 'redux-logger'

const logger = createLogger()
const createStoreWithMiddleware = applyMiddleware(thunkMiddleware, logger)(createStore)

export default createStoreWithMiddleware(reducer)