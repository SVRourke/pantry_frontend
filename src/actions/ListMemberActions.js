import api from '../api/Index'

const Load = (members) => {
  return {
    type: 'LOADMEMBERS',
    members: members,
  }
}

const loadMembers = (listId) => {
  return dispatch => {
    api.lists.loadMembers(listId)
      .then(r => r.json())
      .then(d => dispatch(Load(d)))
      .catch(error => alert('error'))

  }
}

export {
  loadMembers,
}