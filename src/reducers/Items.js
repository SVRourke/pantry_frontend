const DELETE = 'DELETE'
const TOGGLE = 'TOGGLE'
const CREATE = 'CREATE'
const EDIT = 'EDIT'
const LOAD = 'LOADITEMS'

const itemReducer = (state = [], action) => {
  switch (action.type) {
    case LOAD:
      return [...state, ...action.items]

    // TOGGLE ACQUIRED
    case TOGGLE:
      const target = state.find(i => i.id === action.itemId)
      
      return [
        Object.assign({}, target, {acquired: !target.acquired}),
        ...state.filter(i => i.id !== action.itemId),
      ]

    // DELETE
    case DELETE:
      const { [action.itemId]: value, ...untouched } = state
      return [...untouched]

    // EDIT
    case EDIT:
      const { [action.item.id]: old, ...nonupdated } = state
      return [...state]

    // DEFAULT
    default:
      return state
  }
}
export default itemReducer
