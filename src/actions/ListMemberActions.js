import api from "../api/Index";
import { addMessage } from "./FlashMessageActions";

const load = (members) => ({
  type: "LOADMEMBERS",
  members,
});

const leave = (listId) => ({
  type: "LEAVE",
  listId,
});

const clearMembers = () => ({
  type: "CLEARMEMBERS",
});

const loadMembers = (listId) => {
  return (dispatch) => {
    api.lists
      .loadMembers(listId)
      .then((r) => r.json())
      .then((d) => dispatch(load(d)))
      .catch((error) =>
        error.status === 401
          ? dispatch({ type: "LOGOUT" })
          : dispatch(addMessage("Could not load contributors"))
      );
  };
};

const leaveList = (listId, cb) => {
  return async (dispatch) => {
    api.lists
      .leave(listId)
      .then((response) => {
        return response.status === 410
          ? response.json()
          : Promise.reject(response);
      })
      .then((d) => cb())
      .then(() => {
        dispatch(leave(listId));
        dispatch(addMessage("Left list..."));
      })
      .catch((error) =>
        error.status === 401
          ? dispatch({ type: "LOGOUT" })
          : dispatch(addMessage("Request did not work, try again later"))
      );
  };
};

export { loadMembers, leaveList, clearMembers };
