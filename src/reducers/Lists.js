const LOAD = 'LOADLISTS'
const ADD = 'ADDLIST'

const listReducer = (state = [], action) => {
  switch (action.type) {
    case LOAD:
      return action.lists

    case ADD:
      return [
        ...state,
        action.list
      ]

    // DEFAULT
    default:
      return state
  }
}
export default listReducer
