const ADD = "ADDMESSAGE";
const REMOVE = "REMOVEMESSAGE";
const CLEAR = "CLEARMESSAGES";

const addMessage = (message) => ({
  type: ADD,
  message,
});

const removeMessage = (message) => ({
  type: REMOVE,
  message,
});

const clearMessages = () => ({
  type: CLEAR,
});

export { addMessage, removeMessage, clearMessages };
