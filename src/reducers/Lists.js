const LOAD = 'LOADLISTS'


const listReducer = (state = [], action) => {
  switch (action.type) {
    case LOAD:
      return [...action.lists]

    // DEFAULT
    default:
      return state
  }
}
export default listReducer
