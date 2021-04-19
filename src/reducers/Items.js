const DELETE = 'DELETE'
const TOGGLE = 'TOGGLE'
// const CREATE = 'CREATE'
const EDIT = 'EDIT'
const LOAD = 'LOADITEMS'

const itemReducer = (state = [], action) => {
  switch (action.type) {
    case LOAD:
      return action.items

    // TOGGLE ACQUIRED
    case TOGGLE:
      const target = state.find(i => i.id === action.itemId)

      return [
        Object.assign({}, target, { acquired: !target.acquired }),
        ...state.filter(i => i.id !== action.itemId),
      ]

    // EDIT
    case EDIT:
      const old = state.find(i => i.id === action.item.id)
      return [
        Object.assign({}, old, action.item),
        ...state.filter(i => i.id !== action.item.id)
      ]

    // DELETE
    case DELETE:
      const { [action.itemId]: value, ...untouched } = state
      return [...untouched]

    // DEFAULT
    default:
      return state
  }
}
export default itemReducer
