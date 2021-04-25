import Api from '../api/Interface'

// UNFRIEND
const Unfriend = (friendshipId) => {
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
  Unfriend,
  loadFriends
}