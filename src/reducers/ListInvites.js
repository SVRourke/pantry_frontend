import { TestInvites } from '../common/TestData'
const SEND = 'SEND'
const ACCEPT = 'ACCEPT'
const DECLINE = 'DECLINE'
const CANCEL = 'CANCEL'

const listInviteReducer = (state = TestInvites, action) => {
  switch (action.type) {
    case SEND:
      console.log(SEND)
      return state

    case ACCEPT:
      console.log(ACCEPT)
      return state

    case DECLINE:
      console.log(DECLINE)
      return state

    case CANCEL:
      return [
        ...state.filter(i => i.id !== parseInt(action.id))
      ]

    default:
      return state
  }
}
export default listInviteReducer