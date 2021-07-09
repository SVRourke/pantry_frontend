const LOAD = 'LOADMEMBERS'
const LEAVELIST ='LEAVE'
const CLEAR = 'CLEARMEMBERS'
const MemberReducer = (state=  [], action) => {
  switch(action.type) {
    case LOAD:
      return action.members
    case LEAVELIST:
      return []
    case CLEAR:
      return []
    default:
      return state
  }
}

export default MemberReducer