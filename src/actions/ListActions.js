import Api from '../api/Interface'

const Load = (lists) => {
  return {
    type: 'LOADLISTS',
    lists: [...lists]

  }
}

const LoadLists = (userId) => {
  return async dispatch => {
      Api.loadLists(userId)
        .then(r => r.json())
        .then(d => dispatch(Load(d)))
        .catch(error => alert('error'))
    }
  
}

export {Load, LoadLists}
