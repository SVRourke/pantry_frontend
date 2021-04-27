import api from '../api/Index'

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
const Load = (items) => {
  return {
    type: 'LOADITEMS',
    items: items

  }
}

const createItem = (listId, item) => {
  return async dispatch => {
    api.items.create(listId, item)
      .then(r => {
        return (
          r.ok
            ? r.json()
            : Promise.reject(r)
        )
      })
      .then(d => dispatch(Create(listId, item)))
      .catch(error => console.log("ERROR", error))
  }
}
const deleteItem = (listId, itemId) => {
  // /lists/:list_id/items/:id
  return async dispatch => {
    api.items.destroy(listId, itemId)
      .then(r => {
        return (
          r.ok
            ? r.json()
            : Promise.reject(r)
        )
      })
      .then(d => dispatch(Trash(listId, itemId)))
      .catch(error => console.log("ERROR", error))
  }
}
const updateItem = (listId, item) => {
  return async dispatch => {
    api.items.update(listId, item)
      .then(r => {
        return (
          r.ok
            ? r.json()
            : Promise.reject(r)
        )
      })
      .then(d => dispatch(Edit(listId, item)))
      .catch(error => console.log("ERROR", error))
  }
}
const ToggleItem = (listId, itemId) => {
  return async dispatch => {
    api.items.toggle(listId, itemId)
      .then(r => {
        return (
          r.ok
            ? r.json()
            : Promise.reject(r)
        )
      })
      .then(d => dispatch(Toggle(listId, itemId)))
      .catch(error => console.log("ERROR", error))

  }
}
const LoadItems = (listId) => {
  return async dispatch => {
    api.items.load(listId)
      .then(r => {
        return (
          r.ok
            ? r.json()
            : Promise.reject(r)
        )
      })
      .then(d => dispatch(Load(d)))
      .catch(error => alert('error'))
  }
}

export {
  Trash,
  Toggle,
  Create,
  Edit,
  LoadItems,
  ToggleItem,
  updateItem,
  deleteItem,
  createItem
}