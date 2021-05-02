import api from '../api/Index'
import { Add } from './ListActions'

const accept = (id) => {
  return {
    type: 'ACCEPT',
    id: id
  }
}

const cancel = (id) => {
  return {
    type: 'CANCEL',
    id: id
  }
}

const Load = (invites) => {
  return {
    type: 'LOADINVITES',
    invites: invites
  }
}

const sendInvite = (email, listId, cb) => {
  return async dispatch => {
    api.listInvites.send(email, listId)
      .then(r => {
        return (
          r.status === 201
            ? r.json()
            : Promise.reject(r)
        )
      })
      .then(d => cb())
      .catch(error => {
        switch (error.status) {
          case 404:
            alert(`No user with email: ${email}`)
            break;
          case 422:
            alert("That user is already invited!")
            break;
          case 401:
            dispatch({type: 'LOGOUT'})
            break;
          default:
            console.log(error)
        }
      })
  }
}

const loadInvites = (userId) => {
  return dispatch => {
    api.listInvites.load(userId)
      .then(r => {
        return (
          r.ok
            ? r.json()
            : Promise.reject(r)
        )
      })
      .then(d => {
        dispatch(Load(d))
      })
      .catch(error => (
        error.status === 401
          ? dispatch({ type: 'LOGOUT' })
          : alert("That didn't work, try again later")
        )
      )
  }
}

const cancelInvite = (userId, inviteId) => {
  return dispatch =>
    api.listInvites.cancel(userId, inviteId)
      .then(r => {
        return (
          r.status === 410
            ? r.json()
            : Promise.reject(r)
        )
      })
      .then(d => {
        dispatch(cancel(inviteId))
      })
      .catch(error => (
        error.status === 401
          ? dispatch({ type: 'LOGOUT' })
          : alert("That didn't work, try again later")
        )
      )
}

const acceptInviteThunk = (userId, inviteId) => {
  return dispatch => {
    api.listInvites.accept(userId, inviteId)
      .then(r => {
        return (
          r.ok
            ? r.json()
            : Promise.reject(r)
        )
      })
      .then(d => {
        dispatch(accept(inviteId))
        dispatch(Add(d))
      })
      .catch(error => (
        error.status === 401
          ? dispatch({ type: 'LOGOUT' })
          : alert("That didn't work, try again later")
        )
      )
  }
}

export {
  sendInvite,
  loadInvites,
  cancelInvite,
  acceptInviteThunk
}