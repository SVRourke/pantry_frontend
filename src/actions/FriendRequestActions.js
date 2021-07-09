import api from "../api/Index";
import { addMessage } from "./FlashMessageActions";

const load = (requests) => ({
  type: "LOADREQUESTS",
  requests,
});

const accept = (id) => ({
  type: "ACCEPTREQUEST",
  id,
});

const cancel = (id) => ({
  type: "CANCELREQUEST",
  id,
});

const addFriend = (friend) => ({
  type: "ADDFRIEND",
  friend: friend,
});

const loadRequests = (id) => {
  return async (dispatch) => {
    api.friendRequests
      .load(id)
      .then((r) => {
        return r.ok ? r.json() : Promise.reject(r);
      })
      .then((d) => dispatch(load(d)))
      .catch((error) =>
        error.status === 401
          ? dispatch({ type: "LOGOUT" })
          : dispatch(addMessage("Couldn't load requests, try again later"))
      );
  };
};

const acceptRequest = (userId, id) => {
  return async (dispatch) => {
    api.friendRequests
      .accept(userId, id)
      .then((r) => {
        return r.ok ? r.json() : Promise.reject(r);
      })
      .then((d) => {
        dispatch(accept(id));
        dispatch(addFriend(d));
      })
      .catch((error) =>
        error.status === 401
          ? dispatch({ type: "LOGOUT" })
          : dispatch(addMessage("Couldn't accept request, try again later"))
      );
  };
};

const cancelRequest = (userId, id) => {
  return async (dispatch) => {
    api.friendRequests
      .cancel(userId, id)
      .then((r) => {
        return r.status === 410 ? r.json() : Promise.reject(r);
      })
      .then((d) => dispatch(cancel(id)))
      .catch((error) =>
        error.status === 401
          ? dispatch({ type: "LOGOUT" })
          : dispatch(addMessage("That didn't work, try again later"))
      );
  };
};

const sendRequest = (userId, email, cb) => {
  return async (dispatch) => {
    api.friendRequests
      .send(userId, email)
      .then((r) => {
        return r.ok ? r.json() : Promise.reject(r);
      })
      .then((d) => cb())
      .catch((error) =>
        error.status === 401
          ? dispatch({ type: "LOGOUT" })
          : dispatch(addMessage("That didn't work, try again later"))
      );
  };
};

export { loadRequests, acceptRequest, cancelRequest, sendRequest };
