import api from "../api/Index";
import { Add } from "./ListActions";
import { addMessage } from "./FlashMessageActions";

const accept = (id) => ({
  type: "ACCEPT",
  id: id,
});

const cancel = (id) => ({
  type: "CANCEL",
  id: id,
});

const Load = (invites) => ({
  type: "LOADINVITES",
  invites: invites,
});

const sendInvite = (email, listId, cb) => {
  return async (dispatch) => {
    api.listInvites
      .send(email, listId)
      .then((r) => {
        return r.status === 201 ? r.json() : Promise.reject(r);
      })
      .then((d) => cb())
      .catch((error) => {
        switch (error.status) {
          case 404:
            dispatch(addMessage(`No user with email: ${email}`));
            break;
          case 422:
            dispatch(addMessage("That user is already invited!"));
            break;
          case 401:
            dispatch({ type: "LOGOUT" });
            break;
          default:
        }
      });
  };
};

const loadInvites = (userId) => {
  return (dispatch) => {
    api.listInvites
      .load(userId)
      .then((r) => {
        return r.ok ? r.json() : Promise.reject(r);
      })
      .then((d) => {
        dispatch(Load(d));
      })
      .catch((error) =>
        error.status === 401
          ? dispatch({ type: "LOGOUT" })
          : dispatch(addMessage("Couldn't load invites, try again later"))
      );
  };
};

const cancelInvite = (userId, inviteId) => {
  return (dispatch) =>
    api.listInvites
      .cancel(userId, inviteId)
      .then((r) => {
        return r.status === 410 ? r.json() : Promise.reject(r);
      })
      .then((d) => {
        dispatch(cancel(inviteId));
      })
      .catch((error) =>
        error.status === 401
          ? dispatch({ type: "LOGOUT" })
          : dispatch(addMessage("That didn't work, try again later"))
      );
};

const acceptInviteThunk = (userId, inviteId) => {
  return (dispatch) => {
    api.listInvites
      .accept(userId, inviteId)
      .then((r) => {
        return r.ok ? r.json() : Promise.reject(r);
      })
      .then((d) => {
        dispatch(accept(inviteId));
        dispatch(Add(d));
      })
      .catch((error) =>
        error.status === 401
          ? dispatch({ type: "LOGOUT" })
          : dispatch(addMessage("That didn't work, try again later"))
      );
  };
};

export { sendInvite, loadInvites, cancelInvite, acceptInviteThunk };
