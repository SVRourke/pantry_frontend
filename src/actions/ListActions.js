import api from "../api/Index";
import { addMessage } from "./FlashMessageActions";

const Load = (lists) => ({
  type: "LOADLISTS",
  lists: [...lists],
});

const Add = (list) => ({
  type: "ADDLIST",
  list: list,
});

const CreateList = (userId, list, cb) => {
  return async (dispatch) => {
    api.lists
      .create(userId, list)
      .then((r) => {
        return r.ok ? r.json() : Promise.reject(r);
      })
      .then((d) => {
        dispatch(Add(d));
        cb(d.id);
      })
      .catch((error) =>
        error.status === 401
          ? dispatch({ type: "LOGOUT" })
          : dispatch(addMessage("That didn't work, try again later"))
      );
  };
};

const LoadLists = (userId) => {
  return async (dispatch) => {
    api.lists
      .load(userId)
      .then((response) => {
        return response.ok ? response.json() : Promise.reject(response);
      })
      .then((data) => {
        dispatch(addMessage("Lists Loaded!"));
        dispatch(Load(data));
      })
      .catch((error) =>
        error.status === 401
          ? dispatch({ type: "LOGOUT" })
          : dispatch(addMessage("That didn't work, try again later"))
      );
  };
};

export { Load, Add, LoadLists, CreateList };
