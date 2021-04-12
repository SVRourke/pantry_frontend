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
const Create = (listId, item) => {
  return {
    type: 'CREATE',
    listId: listId,
    item: item
  }
}
const Edit = (listId, item) => {
  return {
    type: 'EDIT',
    listId: listId,
    item: item
  }
}
export {
  Trash,
  Toggle,
  Create,
  Edit
}