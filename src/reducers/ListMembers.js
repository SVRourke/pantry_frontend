const LOAD = 'LOADMEMBERS'
const LEAVELIST ='LEAVE'
const MemberReducer = (state=  [], action) => {
  console.log("REDUCER", action)
  switch(action.type) {
    case LOAD:
      return action.members
    case LEAVELIST:
      return []
    default:
      return state
  }
}

export default MemberReducer