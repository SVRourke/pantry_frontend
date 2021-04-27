import api from '../api/Index'
import { Add } from './ListActions'

// SEND
const Send = (listId, email) => {
  return {
    type: 'SEND',
    email: email,
    list: listId
  }
}
// ACCEPT
const accept = (id) => {
  return {
    type: 'ACCEPT',
    id: id
  }
}
// DECLINE
const Decline = (id) => {
  return {
    type: 'DECLINE',
    id: id
  }
}
// CANCEL
const Cancel = (id) => {
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

const sendInvite = (email, listId) => {
  return async dispatch => {
    api.listInvites.send(email, listId)
      .then(r => {
        return (
          r.ok
            ? r.json()
            : Promise.reject(r)
        )
      })
      .then(d => {
        console.log(d)

        alert("INVITE SENT")
      })
      .catch(error => {
        switch (error.status) {
          case 404:
            alert(`No user with email: ${email}`)
            break;
          case 422:
            alert("That user is already invited!")
            break;
          default:
            alert(`Nothing, thats weird ${error.status}`)
        }
      })
  }
}
// /users/:user_id/list_invites
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
      .catch(error => console.log(error))
  }
}

const cancelInvite = (userId, inviteId) => {
  return dispatch =>
  api.listInvites.cancel(userId, inviteId)
      .then(r => {
        console.log("STATUS")
        return (
          r.status === 410
            ? r.json()
            : Promise.reject(r)
        )
      })
      .then(d => {
        console.log("THEN", d)
        dispatch(Cancel(inviteId))
      })
      .catch(error => alert("That didn't work, try again in a few minutes"))
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
        console.log(d, inviteId)
        dispatch(accept(inviteId))
        dispatch(Add(d))
      })
      .catch(error => console.log("ERROR", error))
  }
}

export {
  Send,
  Decline,
  Cancel,
  sendInvite,
  loadInvites,
  cancelInvite,
  acceptInviteThunk
}