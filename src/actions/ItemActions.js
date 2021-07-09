import api from "../api/Index";
import { addMessage } from "./FlashMessageActions";

const Trash = (listId, itemId) => ({
  type: "DELETE",
  listId: listId,
  itemId: itemId,
});

const Toggle = (listId, itemId) => ({
  type: "TOGGLE",
  listId: listId,
  itemId: itemId,
});

const create = (item) => ({
  type: "CREATE",
  item: item,
});

const Edit = (listId, item) => ({
  type: "EDIT",
  listId: listId,
  item: item,
});

const Load = (items) => ({
  type: "LOADITEMS",
  items: items,
});

const clearItems = () => ({
  type: "RESETITEMS",
});

const createItem = (listId, item) => {
  return async (dispatch) => {
    api.items
      .create(listId, item)
      .then((r) => {
        return r.ok ? r.json() : Promise.reject(r);
      })
      .then((d) => {
        dispatch(create(listId, d));
        dispatch(addMessage("Item added"));
      })
      .catch((error) =>
        error.status === 401
          ? dispatch({ type: "LOGOUT" })
          : dispatch(addMessage("That didn't work, try again later"))
      );
  };
};
const deleteItem = (listId, itemId) => {
  return async (dispatch) => {
    api.items
      .destroy(listId, itemId)
      .then((r) => {
        return r.status === 410 ? r.json() : Promise.reject(r);
      })
      .then((d) => {
        dispatch(Trash(listId, itemId));
        dispatch(addMessage("Item Deleted"));
      })
      .catch((error) =>
        error.status === 401
          ? dispatch({ type: "LOGOUT" })
          : dispatch(addMessage("That didn't work, try again later"))
      );
  };
};
const updateItem = (listId, item) => {
  return async (dispatch) => {
    api.items
      .update(listId, item)
      .then((r) => {
        return r.ok ? r.json() : Promise.reject(r);
      })
      .then((d) => dispatch(Edit(listId, item)))
      .catch((error) =>
        error.status === 401
          ? dispatch({ type: "LOGOUT" })
          : dispatch(addMessage("That didn't work, try again later"))
      );
  };
};
const toggleItem = (listId, itemId) => {
  return async (dispatch) => {
    api.items
      .toggle(listId, itemId)
      .then((r) => {
        return r.ok ? r.json() : Promise.reject(r);
      })
      .then((d) => dispatch(Toggle(listId, itemId)))
      .catch((error) =>
        error.status === 401
          ? dispatch({ type: "LOGOUT" })
          : dispatch(addMessage("That didn't work, try again later"))
      );
  };
};
const loadItems = (listId) => {
  return async (dispatch) => {
    api.items
      .load(listId)
      .then((r) => {
        return r.ok ? r.json() : Promise.reject(r);
      })
      .then((d) => dispatch(Load(d)))
      .catch((error) =>
        error.status === 401
          ? dispatch({ type: "LOGOUT" })
          : dispatch(addMessage("That didn't work, try again later"))
      );
  };
};

export {
  clearItems,
  loadItems,
  toggleItem,
  updateItem,
  deleteItem,
  createItem,
};
