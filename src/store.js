import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import listReducer from './reducers/Lists'
import itemReducer from "./reducers/Items"
import listInviteReducer from './reducers/ListInvites'
import LoginReducer from './reducers/Login'
import MemberReducer from './reducers/ListMembers'

const rootReducer = combineReducers({
  lists: listReducer,
  items: itemReducer,
  members: MemberReducer,
  listInvites: listInviteReducer,
  profile: LoginReducer
})
const combinedStore = createStore(rootReducer, applyMiddleware(thunk))
export default combinedStore
