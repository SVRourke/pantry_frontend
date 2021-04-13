import { TestInvites } from '../common/TestData'
const SEND = 'SEND'
const ACCEPT = 'ACCEPT'
const CANCEL = 'CANCEL'

const listInviteReducer = (state = TestInvites, action) => {
  switch (action.type) {
    case SEND:
      console.log(SEND)
      // TODO: NEEDS RESPONSE FROM API
      // 1 send email to api
      // 2 if response good, add invite to store
      // 2.5 if response bad, display error msg
  
      return state

    case ACCEPT:
      console.log(ACCEPT)
      // TODO: NEEDS RESPONSE FROM API
      // 1 send accept req,
      // 2 if response is good, delete that invite
      // 3 somehow trigger adding list to store
      // 2.5 if response bad, display error message
      return [
        ...state.filter(i => i.id !== parseInt(action.id))
      ]
      return state

    case CANCEL:
      // TODO: NEEDS RESPONSE FROM API
      // 1 send cancel/delete req to api
      // 2 response good? delete from store
      // 3 response bad? display retry message
      return [
        ...state.filter(i => i.id !== parseInt(action.id))
      ]

    default:
      return state
  }
}
export default listInviteReducer