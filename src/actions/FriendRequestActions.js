// SEND
const Send = (email) => {
  return {
    type: 'SEND',
    email: email
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
  type: 'DECLINE',
  id: id
}
// CANCEL
const Cancel = (id) => {
  type: 'CANCEL',
  id: id
}

export {
  Send,
  Accept,
  Decline,
  Cancel
}