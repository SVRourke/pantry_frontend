import thunk from "redux-thunk";
import {
  listReducer,
  itemReducer,
  listInviteReducer,
  LoginReducer,
  MemberReducer,
  FriendRequestReducer,
  FriendsReducer,
  FlashMessagesReducer,
} from "./reducers";

import { combineReducers, createStore, applyMiddleware } from "redux";

import { persistStore, persistReducer, purgeStoredState } from "redux-persist";

import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const appReducer = combineReducers({
  lists: listReducer,
  items: itemReducer,
  friends: FriendsReducer,
  members: MemberReducer,
  listInvites: listInviteReducer,
  friendRequests: FriendRequestReducer,
  profile: LoginReducer,
  flash: FlashMessagesReducer,
});

const rootReducer = (state, action) => {
  if (action.type === "RESET") {
    purgeStoredState(persistConfig);
  }
  return appReducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(thunk));

const persistor = persistStore(store);

export { store, persistor };
