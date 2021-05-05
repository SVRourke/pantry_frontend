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

const CreateList = (userId, list, cb) => {
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
        cb(d.id)
      })
      .catch(error => (
        error.status === 401
          ? dispatch({ type: 'LOGOUT' })
          : alert("That didn't work, try again later")
      )
      )
  }
}

const LoadLists = (userId) => {
  return async dispatch => {
    api.lists.load(userId)
      .then(response => {
        return (
          response.ok
            ? response.json()
            : Promise.reject(response)
        )
      })
      .then(data => dispatch(Load(data)))
      .catch(error => (
        error.status === 401
          ? dispatch({ type: 'LOGOUT' })
          : alert("That didn't work, try again later")
      )
      )
  }
}


export {
  Load,
  Add,
  LoadLists,
  CreateList
}
