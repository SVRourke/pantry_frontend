import Api from '../api/Interface'

// UNFRIEND
const removeFriend = (friendshipId) => {
  return {
    type: 'UNFRIEND',
    friendshipId: friendshipId
  }
}

const Load = friends => {
  return {
    type: 'LOADFRIENDS',
    friends
  }
}

const unfriend = (userId, friendId, friendshipId) => {
  return async dispatch => {
    Api.unfriend(userId, friendId)
      .then(r => {
        return (
          r.status === 410
            ? r.json()
            : Promise.reject(r)
        )
      })
      .then(d => dispatch(removeFriend(friendshipId)))
      .catch(e => console.log("UNFRIEND ERROR", e))
  }
}

const loadFriends = userId => {
  return async dispatch => {
    Api.loadFriends(userId)
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
      .catch(error => console.log("LOAD FRIENDS ERROR", error))
  }
}


export {
  loadFriends,
  unfriend
}