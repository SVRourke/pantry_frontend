const ADD = "ADDMESSAGE";
const REMOVE = "REMOVEMESSAGE";
const CLEAR = "CLEARMESSAGES";

const FlashMessagesReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.message];
    case REMOVE:
      return state.filter((r) => r !== action.message);
    case CLEAR:
      return [];
    default:
      return state;
  }
};

export default FlashMessagesReducer;

// message = {
//     text: 'Invalid credentials try again',
//     id: 3
// }
