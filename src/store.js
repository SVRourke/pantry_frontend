import thunk from 'redux-thunk'
import {
  listReducer,
  itemReducer,
  listInviteReducer,
  LoginReducer,
  MemberReducer,
  FriendRequestReducer,
  FriendsReducer
} from "./reducers"

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
  friends: FriendsReducer,
  members: MemberReducer,
  listInvites: listInviteReducer,
  friendRequests: FriendRequestReducer,
  profile: LoginReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, applyMiddleware(thunk))
const persistor = persistStore(store)
export { store, persistor };
