// ALERT: REFACTOR
import { Interface, Schemas } from '../api/Interface'
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
const updateItem = (listId, item) => {
  return async dispatch => {
    fetch(`http://localhost:3000/lists/${listId}/items/${item.id}/update`, {
      method: 'PUT',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        "X-CSRF-Token": Cookies.get("CSRF-TOKEN")
      },
      body: JSON.stringify({"item": item})
    })
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
    fetch(`http://localhost:3000/lists/${listId}/items/${itemId}/acquire`, {
      method: 'PATCH',
      credentials: 'include',
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        "X-CSRF-Token": Cookies.get("CSRF-TOKEN")
      }
    })
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
    fetch(`http://localhost:3000/lists/${listId}/items`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    })
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
  updateItem
}