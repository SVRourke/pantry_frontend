import { combineReducers, createStore } from 'redux'
import itemReducer from "./reducers/Items"
import listInviteReducer from './reducers/ListInvites'


const rootReducer = combineReducers({
  lists: itemReducer,
  listInvites: listInviteReducer,
})
const combinedStore = createStore(rootReducer)
export default combinedStore


// SWITCH TO COMBINE REDUCERS