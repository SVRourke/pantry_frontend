const LOAD = 'LOADMEMBERS'

const MemberReducer = (state=  [], action) => {
  switch(action.type) {
    case LOAD:
      return action.members

    default:
      return state
  }
}

export default MemberReducer