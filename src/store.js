import thunk from 'redux-thunk'
import listReducer from './reducers/Lists'
import itemReducer from "./reducers/Items"
import listInviteReducer from './reducers/ListInvites'
import LoginReducer from './reducers/Login'
import MemberReducer from './reducers/ListMembers'


import {
  combineReducers,
  createStore,
  applyMiddleware
} from 'redux'

import {
  persistStore,
  persistReducer
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
  key: 'root',
  storage
}

const rootReducer = combineReducers({
  lists: listReducer,
  items: itemReducer,
  members: MemberReducer,
  listInvites: listInviteReducer,
  profile: LoginReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, applyMiddleware(thunk))
const persistor = persistStore(store)
export {store, persistor};
