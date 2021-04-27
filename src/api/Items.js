import { baseRequest } from './Interface'

const create = (listId, item) => {
  return baseRequest(
    `lists/${listId}/items`,
    'POST',
    true,
    {item: item}
  )
}

const destroy = (listId, itemId) => {
  return baseRequest(
    `lists/${listId}/items/${itemId}`,
    'DELETE',
    true,
  )
}

const update = (listId, item) => {
  return baseRequest(
    `lists/${listId}/items/${item.id}/update`,
    'PUT',
    true,
    {item: item}
  )
}

const toggle = (listId, itemId) => {
  return baseRequest(
    `lists/${listId}/items/${itemId}/acquire`,
    'PATCH',
    true,
  )
}

const load = (listId) => {
  return baseRequest(
    `lists/${listId}/items`,
    'GET',
    true,
  )
}

const items = {
  create,
  destroy,
  update,
  toggle,
  load
}

export default items