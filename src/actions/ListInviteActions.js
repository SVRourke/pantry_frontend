// SEND
const Send = (listId, email) => {
  return {
    type: 'SEND',
    email: email,
    list: listId
  }
}
// ACCEPT
const Accept = (id) => {
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

export {
  Send,
  Accept,
  Decline,
  Cancel
}