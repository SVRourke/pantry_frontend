const DELETE = "DELETE"
const TOGGLE = "TOGGLE"


const itemReducer = (state, action) => {
  const list = state.find(l => l.id === action.listId)

  
  switch (action.type) {
    // TOGGLE ACQUIRED
    case TOGGLE:
      const item = list.items[action.itemId]
      let { [action.itemId]: target, ...remainder } = list.items
      console.log(target)

      return [
        ...state.filter(l => l.id !== action.listId),
        {
          ...list,
          items: {
            [action.itemId]: {...target, acquired: !target.acquired},
            ...remainder,
          }
        }
      ]

    // DELETE
    case DELETE:
      let { [action.itemId]: value, ...newItems } = list.items

      return [
        ...state.filter(l => l.id !== action.listId),
        { ...list, items: newItems}
      ]

    // EDIT
    // NEW

    default:
      return state
  }
}
export default itemReducer