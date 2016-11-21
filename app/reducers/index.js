import { combineReducers } from 'redux'
import grid from './grid'
import popup from './popup'


const reducers = combineReducers({
  grid,
  popup,
})

export default reducers
