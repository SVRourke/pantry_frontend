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
// const cancelInvite = () => {}
// const acceptInvite = () => {}

export {
  Send,
  accept as Accept,
  Decline,
  Cancel,
  sendInvite,
}