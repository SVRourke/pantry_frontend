import api from '../api/Index'

const load = (requests) => {
  return {
    type: 'LOADREQUESTS',
    requests
  }
}

const accept = (id) => {
  return {
    type: 'ACCEPTREQUEST',
    id
  }
}

const cancel = (id) => {
  return {
    type: 'CANCELREQUEST',
    id
  }
}

const addFriend = friend => {
  return {
    type: 'ADDFRIEND',
    friend: friend
  }
}

const loadRequests = (id) => {
  return async dispatch => {
    api.friendRequests.load(id)
      .then(r => {
        return (
          r.ok
            ? r.json()
            : Promise.reject(r)
        )
      })
      .then(d => dispatch(load(d)))
      .catch(error => console.log(error))
  }
}

const acceptRequest = (userId, id) => {
  return async dispatch => {
    api.friendRequests.accept(userId, id)
      .then(r => {
        return (
          r.ok
            ? r.json()
            : Promise.reject(r)
        )
      })
      .then(d => {
        dispatch(accept(id))
        dispatch(addFriend(d))
      })
      .catch(error => alert(error.message))
  }
}

const cancelRequest = (userId, id) => {
  return async dispatch => {
    api.friendRequests.cancel(userId, id)
      .then(r => {
        return (
          r.status === 410
            ? r.json()
            : Promise.reject(r)
        )
      })
      .then(d => dispatch(cancel(id)))
      .catch(error => alert(error.message))
  }
}

const sendRequest = (userId, email, cb) => {
  return async dispatch => {
    api.friendRequests.send(userId, email)
      .then(r => {
        return (
          r.ok
            ? r.json()
            : Promise.reject(r)
        )
      })
      .then(d => cb())
      .catch(error => alert("That didn't work... check the email and try again"))
  }
}

export {
  loadRequests,
  acceptRequest,
  cancelRequest,
  sendRequest
}