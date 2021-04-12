const DELETE = "DELETE"
const TOGGLE = "TOGGLE"


const itemReducer = (state, action) => {
  
  switch (action.type) {
    // TOGGLE ACQUIRED
    // case TOGGLE:
    //   const list = state.find(l => l.id === action.listId)
    //   const item = list.items.find(i => i.id === action.itemId)
      
    //   return [
    //     ...state.filter(l => l.id !== action.listId),
    //     {
    //       ...list,
    //       items: [
    //         ...list.items.filter(i => i.id !== action.itemId),
    //         {...item, acquired: !item.acquired}
    //       ]
    //     }
    //   ]
      // DELETE
      case DELETE:
        const list = state.find(l => l.id === action.listId)

      return [
        ...state.filter(l => l.id !== action.listId),
        {
          ...list,
          items: [
            ...list.items.filter(i => i.id !== action.itemId)
          ]
        }
      ]

    default:
      return state
  }
}
export default itemReducer