const SEND = 'SENDREQUEST'
const ACCEPT = 'ACCEPTREQUEST'
const CANCEL = 'CANCELREQUEST'
const LOAD = 'LOADREQUESTS'

const FriendRequestReducer = (state = [], action) => {
  switch (action.type) {
    case LOAD:
      return action.requests
    case SEND:
      console.log(SEND)
      return state
    case ACCEPT:
      console.log(ACCEPT)
      return state
    case CANCEL:
      console.log(CANCEL)
      return state
    default:
      return state
  }
}

export default FriendRequestReducer