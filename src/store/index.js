import {applyMiddleware,combineReducers,createStore} from 'redux'
import {colors,sort} from './reducers'
import stateData from '../../data/initialState'

/* eslint prefer-destructuring: off */
const console = window.console


const logger = (store) => (next) => (action) => {
  
  console.groupCollapsed('dispatching',action.type)
  console.log('prev state',store.getState())
  console.log('action',action)
  const result = next(action)

  console.log('next state',store.getState())
  console.groupEnd()
  
  return result
}

const saver = (store) => (next) => (action) => {
  const result = next(action)

  localStorage['redux-store'] = JSON.stringify(store.getState())
  
  return result
}

const storeFactory = (initialState=stateData) =>
  applyMiddleware(logger,saver)(createStore)(
    combineReducers({
      colors,
      sort
    }),
    localStorage['redux-store']
      ? JSON.parse(localStorage['redux-store'])
      : initialState
  )

export default storeFactory