import Api from '../api/Interface'
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
    Api.sendListInvite(email, listId)
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
        }
      })
  }
}
// /users/:user_id/list_invites
const loadInvites = (userId) => {
  return dispatch => {
    Api.loadInvites(userId)
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
    Api.cancelInvite(userId, inviteId)
      .then(r => {
        return (
          r.ok
            ? dispatch(Cancel(inviteId))
            : Promise.reject(r)
        )
      })
      .then(error => alert("That didn't work, try again in a few minutes"))
  alert("Cancelling")
}

// const acceptInvite = () => {
  // send request
  // dispatch action
  // when done dispatch loadLists
// }

export {
  Send,
  accept as Accept,
  Decline,
  Cancel,
  sendInvite,
  loadInvites,
  cancelInvite
}