import Api from '../api/Interface'
// LOAD
const load = (requests) => {
  console.log(requests)
  return {
    type: 'LOADREQUESTS',
    requests
  }
}
// ACCEPT
const accept = (id) => {
  return {
    type: 'ACCEPTREQUEST',
    id
  }
}
// CANCEL
const cancel = (id) => {
  return {
    type: 'CANCELREQUEST',
    id
  }
}

const loadRequests = (id) => {
  return async dispatch => {
    Api.loadRequests(id)
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
// maybe also dispatch load friends
const acceptRequest = (userId, id) => {
  return async dispatch => {
    Api.acceptRequest(userId, id)
      .then(r => {
        return (
          r.ok
            ? r.json()
            : Promise.reject(r)
        )
      })
      .then(d => dispatch(accept(id)))
      .catch(error => console.log(error))
  }
}

const cancelRequest = (userId, id) => {
  return async dispatch => {
    Api.cancelRequest(userId, id)
      .then(r => {
        return (
          r.status === 410
            ? r.json()
            : Promise.reject(r)
        )
      })
      .then(d => dispatch(cancel(id)))
      .catch(error => console.log("ERROR", error))
  }
}

const sendRequest = (userId, email, cb) => {
  return async dispatch => {
    Api.sendRequest(userId, email)
      .then(r => {
        return (
          r.ok
            ? r.json()
            : Promise.reject(r)
        )
      })
      .then(d => cb())
      .catch(error => console.log("Error", error))
  }
}

export {
  loadRequests,
  acceptRequest,
  cancelRequest,
  sendRequest
}