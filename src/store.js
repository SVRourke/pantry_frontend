import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import itemReducer from "./reducers/Items"
import listInviteReducer from './reducers/ListInvites'
import LoginReducer from './reducers/Login'

const rootReducer = combineReducers({
  lists: itemReducer,
  listInvites: listInviteReducer,
  profile: LoginReducer,
})
const combinedStore = createStore(rootReducer, applyMiddleware(thunk))
export default combinedStore


// SWITCH TO COMBINE REDUCERS