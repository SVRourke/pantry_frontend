const LOAD = 'LOADFRIENDS'
const UNFRIEND = 'UNFRIEND'


const FriendsReducer = (state = [], action) => {
  switch (action.type) {
    case LOAD:
      return action.friends
    case UNFRIEND:
      return state.filter((r) => r.id !== action.friendshipId)
    default:
      return state
  }
}

export default FriendsReducer