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
const create = (item) => {
  return {
    type: 'CREATE',
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
      .then(d => dispatch(create(listId, d)))
      .catch(error => (
        error.status === 401
          ? dispatch({ type: 'LOGOUT' })
          : alert("That didn't work, try again later")
      )
      )
  }
}
const deleteItem = (listId, itemId) => {
  return async dispatch => {
    api.items.destroy(listId, itemId)
      .then(r => {
        return (
          r.status === 410
            ? r.json()
            : Promise.reject(r)
        )
      })
      .then(d => dispatch(Trash(listId, itemId)))
      .catch(error => (
        error.status === 401
          ? dispatch({ type: 'LOGOUT' })
          : alert("That didn't work, try again later")
      )
      )
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
      .catch(error => (
        error.status === 401
          ? dispatch({ type: 'LOGOUT' })
          : alert("That didn't work, try again later")
      )
      )
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
      .catch(error => (
        error.status === 401
          ? dispatch({ type: 'LOGOUT' })
          : alert("That didn't work, try again later")
      )
      )

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
      .catch(error => (
        error.status === 401
          ? dispatch({ type: 'LOGOUT' })
          : alert("That didn't work, try again later")
      )
      )
  }
}

export {
  Trash,
  Toggle,
  create,
  Edit,
  LoadItems,
  ToggleItem,
  updateItem,
  deleteItem,
  createItem
}