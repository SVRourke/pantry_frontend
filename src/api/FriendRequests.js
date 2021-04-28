import { baseRequest } from './Interface'

const load = (userId) => {
  return baseRequest(
    `users/${userId}/friendrequests`,
    'GET',
    true
  )
}

const accept = (userId, requestId) => {
  return baseRequest(
    `users/${userId}/friendrequests/${requestId}/accept`,
    'PATCH',
    true
  )
}

const cancel = (userId, reqId) => {
  return baseRequest(
    `users/${userId}/friendrequests/${reqId}`,
    'DELETE',
    true
  )
}

const send = (userId, email) => {
  return baseRequest(
    `users/${userId}/friendrequests`,
    'POST',
    true,
    {email: email}
  )
}

const friendRequests = {
  load,
  accept,
  cancel,
  send
}

export default friendRequests