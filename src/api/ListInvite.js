import { baseRequest } from './Interface'

const send = (email, listId) => {
  return baseRequest(
    `lists/${listId}/list_invites`,
    'POST',
    true,
    {email: email}
  )
}

const load = (userId) => {
  return baseRequest(
    `users/${userId}/list_invites`,
    'GET',
    true
  )
}

const cancel = (userId, itemId) => {
  return baseRequest(
    `users/${userId}/list_invites/${itemId}`,
    'DELETE',
    true
  )
}

const accept = (userId, listInviteId) => {
  return baseRequest(
    `users/${userId}/list_invites/${listInviteId}/accept`,
    'PATCH',
    true
  )
}

const listInvites = {
  send,
  load,
  cancel,
  accept
}

export default listInvites