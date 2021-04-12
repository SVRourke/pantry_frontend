const Trash = (listId, itemId) => {
  return {
    type: 'DELETE',
    listId: listId,
    itemId: itemId
  }
}

const Toggle = (listId, itemId) => {
  return {
    type: 'TOGGLE',
    listId: listId,
    itemId: itemId
  }
}

export {
  Trash,
  Toggle
}