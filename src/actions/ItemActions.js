import { Interface, Schemas } from '../api/Interface'

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

const Load = (lists) => {
  return {
    type: 'LOADLISTS',
    lists: [...lists]

  }
}

const LoadLists = (userId) => {
  alert(`Loading Lists ${userId}`)
  return async dispatch => {
    fetch(`http://localhost:3000/users/${userId}/lists`, {
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
  LoadLists
}