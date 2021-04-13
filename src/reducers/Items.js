import { TestLists } from "../common/TestData"
const DELETE = 'DELETE'
const TOGGLE = 'TOGGLE'
const CREATE = 'CREATE'
const EDIT = 'EDIT'


const itemReducer = (state = TestLists, action) => {
  const list = state.find(l => l.id === parseInt(action.listId))
  
  switch (action.type) {
    // TOGGLE ACQUIRED
    case TOGGLE:
      const { [action.itemId]: target, ...remainder } = list.items
      return [
        ...state.filter(l => l.id !== parseInt(action.listId)),
        {
          ...list,
          items: {
            [action.itemId]: { ...target, acquired: !target.acquired },
            ...remainder
          }
        }
      ]

    // DELETE
    case DELETE:
      const { [action.itemId]: value, ...untouched } = list.items

      return [
        ...state.filter(l => l.id !== parseInt(action.listId)),
        { ...list, items: untouched }
      ]

    // EDIT
    // ALERT: CHANGE TO OBJECT.ASSIGN MINIMIZE THE PAYLOAD 
    case EDIT:
      const { [action.item.id]: old, ...nonupdated } = list.items

      return [
        ...state.filter(l => l.id !== parseInt(action.listId)),
        {
          ...list,
          items: {
            [action.item.id]: action.item,
            ...nonupdated 
          }
        }
      ]

      case CREATE: 
        // NEW NEEDS API TO WORK create a new item
        return state

    // DEFAULT
    default:
      return state
  }
}
export default itemReducer