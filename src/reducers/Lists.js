const LOAD = 'LOADLISTS'


const listReducer = (state = [], action) => {
  const list = state.find(l => l.id === parseInt(action.listId))
  
  switch (action.type) {
    case LOAD:
      return [...state, ...action.lists]

    // DEFAULT
    default:
      return state
  }
}
export default listReducer
