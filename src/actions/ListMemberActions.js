import api from '../api/Index'

const load = (members) => {
  return {
    type: 'LOADMEMBERS',
    members,
  }
}

const leave = (listId) => {
  return {
    type: 'LEAVE',
    listId
  }
}

const loadMembers = (listId) => {
  return dispatch => {
    api.lists.loadMembers(listId)
      .then(r => r.json())
      .then(d => dispatch(load(d)))
      .catch(error => alert('error'))
  }
}

const leaveList = (listId, cb) => {
  return async dispatch => {
    api.lists.leave(listId)
      .then(response => {
        return (
          response.status === 410
            ? response.json()
            : Promise.reject(response)
        )
      })
      .then(d => cb())
      .then(() => dispatch(leave(listId)))
      .catch(error => console.log("ERROR", error))
  }
}

export {
  loadMembers,
  leaveList
}