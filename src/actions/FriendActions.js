import api from "../api/Index";
import { addMessage } from "./FlashMessageActions";

const removeFriend = (friendshipId) => ({
  type: "UNFRIEND",
  friendshipId: friendshipId,
});

const Load = (friends) => ({
  type: "LOADFRIENDS",
  friends,
});

const unfriend = (userId, friendId, friendshipId) => {
  return async (dispatch) => {
    api.friends
      .unfriend(userId, friendId)
      .then((r) => {
        return r.status === 410 ? r.json() : Promise.reject(r);
      })
      .then((d) => dispatch(removeFriend(friendshipId)))
      .catch((error) =>
        error.status === 401
          ? dispatch({ type: "LOGOUT" })
          : dispatch(addMessage("Could not unfriend, try again later"))
      );
  };
};

const loadFriends = (userId) => {
  return async (dispatch) => {
    api.friends
      .loadFriends(userId)
      .then((r) => {
        return r.ok ? r.json() : Promise.reject(r);
      })
      .then((d) => dispatch(Load(d)))
      .catch((error) =>
        error.status === 401
          ? dispatch({ type: "LOGOUT" })
          : dispatch(addMessage("Could not load friends, try again later"))
      );
  };
};

export { loadFriends, unfriend };
