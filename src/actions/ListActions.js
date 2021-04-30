import api from '../api/Index'

const Load = (lists) => {
  return {
    type: 'LOADLISTS',
    lists: [...lists]

  }
}

const Add = list => {
  return {
    type: 'ADDLIST',
    list: list
  }
}
// POST   /users/:user_id/lists(.:format)
const CreateList = (userId, list) => {
  return async dispatch => {
    api.lists.create(userId, list)
      .then(r => {
        return (
          r.ok
            ? r.json()
            : Promise.reject(r)
        )
      })
      .then(d => {
        dispatch(Add(d))
      })
      .catch(error => console.log("Error"))
  }
}

const LoadLists = (userId) => {
  return async dispatch => {
    api.lists.load(userId)
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
  Load,
  Add,
  LoadLists,
  CreateList
}
