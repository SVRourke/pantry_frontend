import api from '../api/Index'
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
// 401
const unfriend = (userId, friendId, friendshipId) => {
  return async dispatch => {
    api.friends.unfriend(userId, friendId)
      .then(r => {
        return (
          r.status === 410
            ? r.json()
            : Promise.reject(r)
        )
      })
      .then(d => dispatch(removeFriend(friendshipId)))
      .catch(error => (
        error.status === 401
          ? dispatch({ type: 'LOGOUT' })
          : alert("That didn't work, try again later")
      )
      )
  }
}

const loadFriends = userId => {
  return async dispatch => {
    api.friends.loadFriends(userId)
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


export {
  loadFriends,
  unfriend
}