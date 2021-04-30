import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useRouteMatch, useParams, useHistory } from 'react-router-dom'
import MemberCard from './components/MemberCard'
import { NiceLink } from '../common/elements'

import {
  loadMembers,
  leaveList
} from '../actions/ListMemberActions'

const MembersContainer = (props) => {
  const { members, userId, load, leave } = props
  const {  url } = useRouteMatch()
  const {list_id} = useParams()
  const history = useHistory()
  

  useEffect(() => {
    load(list_id)
  }, [])

  const handleLeave = () => {
    leave(list_id, (() => history.push(`/users/${userId}/lists`)))
  }

  return (
    <div>
      { members.map(c => <MemberCard user={c} />) }
      <NiceLink to={`${url}/invite`}>invite a user</NiceLink>
      <button onClick={handleLeave} >leave</button>
    </div>
  );
}

const mapStateToProps = state => ({
  members: state.members,
  userId: state.profile.userId
})
const mapDispatchToProps = dispatch => ({
  load: (list_id) => dispatch(loadMembers(list_id)),
  leave: (list_id, cb) => dispatch(leaveList(list_id, cb))
})
export default connect(mapStateToProps, mapDispatchToProps)(MembersContainer)
