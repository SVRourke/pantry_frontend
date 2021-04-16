import { Interface, Schemas } from '../api/Interface'

const Load = (lists) => {
  return {
    type: 'LOADLISTS',
    lists: [...lists]

  }
}

const LoadLists = (userId) => {
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

export {Load, LoadLists}