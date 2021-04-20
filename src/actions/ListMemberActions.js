import Api from '../api/Interface'

const Load = (members) => {
  return {
    type: 'LOADMEMBERS',
    members: members,
  }
}

const loadMembers = (listId) => {
  return dispatch => {
    Api.loadMembers(listId)
      .then(r => r.json())
      .then(d => dispatch(Load(d)))
      .catch(error => alert('error'))

  }
}

export {
  loadMembers,
}