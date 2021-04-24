const SEND = 'SENDREQUEST'
const ACCEPT = 'ACCEPTREQUEST'
const CANCEL = 'CANCELREQUEST'
const LOAD = 'LOADREQUESTS'

const FriendRequestReducer = (state = [], action) => {
  switch (action.type) {
    case LOAD:
      return action.requests
    case ACCEPT:
      return state.filter((r) => r.id !== action.id)
    case CANCEL:
      return state.filter(r => r.id !== action.id)
    default:
      return state
  }
}

export default FriendRequestReducer