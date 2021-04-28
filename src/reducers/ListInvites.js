const ACCEPT = 'ACCEPT'
const CANCEL = 'CANCEL'
const LOAD = 'LOADINVITES'

const listInviteReducer = (state = [], action) => {
  switch (action.type) {
    case LOAD:
      return action.invites

    case ACCEPT:
      return state.filter(i => i.id !== parseInt(action.id))

    case CANCEL:
      return state.filter(i => i.id !== parseInt(action.id))

    default:
      return state
  }
}
export default listInviteReducer