const ADD = "ADDMESSAGE";
const REMOVE = "REMOVEMESSAGE";
const CLEAR = "CLEARMESSAGES";

const addMessage = (msg) => ({
  type: ADD,
  msg,
});

const removeMessage = (msg) => ({
  type: REMOVE,
  msg,
});

const clearMessages = () => ({
  type: CLEAR,
});
