import Api from '../api/Interface'
import Cookies from 'js-cookie'

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
    Api.createItem(listId, item)
      .then(r => {
        if (r.ok) {
          return r.json()
        } else {
          return Promise.reject(r)
        }
      })
      .then(d => dispatch(Create(listId, item)))
      .catch(error => console.log("ERROR", error))
  }
}
const deleteItem = (listId, itemId) => {
  // /lists/:list_id/items/:id
  return async dispatch => {
    Api.deleteItem(listId, itemId)
      .then(r => {
        if (r.status === 410) {
          return r.json()
        } else {
          return Promise.reject(r)
        }
      })
      .then(d => dispatch(Trash(listId, itemId)))
      .catch(error => console.log("ERROR", error))
  }
}
const updateItem = (listId, item) => {
  return async dispatch => {
    Api.updateItem(listId, item)
      .then(r => {
        if (r.ok) {
          return r.json()
        } else {
          return Promise.reject(r)
        }
      })
      .then(d => dispatch(Edit(listId, item)))
      .catch(error => console.log("ERROR", error))
  }
}
const ToggleItem = (listId, itemId) => {
  return async dispatch => {
    Api.toggleItem(listId, itemId)
      .then(r => {
        if (r.ok) {
          console.log("response ok")
          return r.json()
        } else {
          console.log(r)
          return Promise.reject(r)
        }
      })
      .then(d => dispatch(Toggle(listId, itemId)))
      .catch(error => console.log("ERROR", error))

  }
}
const LoadItems = (listId) => {
  return async dispatch => {
    Api.loadItems(listId)
      .then(r => r.json())
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