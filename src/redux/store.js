import { createStore, combineReducers } from 'redux'
import carsReducer from './carsReducer.js'
import appReducer from './appReducer.js'
import hoursReducer from './hoursReducer.js'
 

let reducers = combineReducers({
  cars: carsReducer,
  app: appReducer,
  hours: hoursReducer,
})
let store = createStore(reducers)

window.store = store
export default store  