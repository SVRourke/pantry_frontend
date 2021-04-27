import { baseRequest } from './Interface'

const create = (userId, list) => {
  return baseRequest(
    `users/${userId}/lists`,
    'POST',
    true,
    {
      list: {
        name: list
      }
    }
  )
}

const load = (userId) => {
  return baseRequest(
    `users/${userId}/lists`,
    'GET',
    true
  )
}

const loadMembers = (listId) => {
  return baseRequest(
    `lists/${listId}/contributions`,
    'GET',
    true
  )
}

const lists = {
  create,
  load,
  loadMembers
}

export default lists