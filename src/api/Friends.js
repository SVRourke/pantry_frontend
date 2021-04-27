import { baseRequest } from './Interface'

// DELETE /users/:user_id/friends/:id
const unfriend = (userId, friendId) => {
  return baseRequest(
    `users/${userId}/friends/${friendId}`,
    'DELETE',
    true
  )
}

const loadFriends = userId => {
  return baseRequest(
    `users/${userId}/friends`,
    'GET',
    true
  )
}

const friends = {
  loadFriends,
  unfriend
}

export default friends