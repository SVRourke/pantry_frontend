const LOAD = 'LOADLISTS'
const ADD = 'ADDLIST'
const LEAVE = 'LEAVE'

const listReducer = (state = [], action) => {
  switch (action.type) {
    case LOAD:
      return action.lists

    case ADD:
      return [
        ...state,
        action.list
      ]

    case LEAVE:
      return state.filter(l => l.id !== action.listId)

    // DEFAULT
    default:
      return state
  }
}
export default listReducer
