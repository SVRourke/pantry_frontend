import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useRouteMatch, useParams, useHistory } from 'react-router-dom'
import MemberCard from './components/MemberCard'
import { Row, NiceLink, NiceButton } from '../common/elements'

import {
  loadMembers,
  leaveList,
  clearMembers
} from '../actions/ListMemberActions'

const MembersContainer = ({ members, userId, load, leave, clear }) => {
  const { url } = useRouteMatch()
  const { list_id } = useParams()
  const history = useHistory()

  useEffect(() => {
    load(list_id)
    return () => {
      clear()
    }
  }, [])

  const handleLeave = () => {
    leave(list_id, (() => history.push(`/users/${userId}/lists`)))
  }

  return (
    <div>
      { members.map(c => <MemberCard user={c} />)}
      <Row>
        <NiceLink
          to={`${url}/invite`}>
          invite a user
        </NiceLink>

        <NiceButton
          style={{ marginLeft: '1rem' }}
          onClick={handleLeave}>
          leave
        </NiceButton>

      </Row>
    </div>
  );
}

const mapStateToProps = state => ({
  members: state.members,
  userId: state.profile.userId
})
const mapDispatchToProps = dispatch => ({
  load: (list_id) => dispatch(loadMembers(list_id)),
  leave: (list_id, cb) => dispatch(leaveList(list_id, cb)),
  clear: () => dispatch(clearMembers())
})
export default connect(mapStateToProps, mapDispatchToProps)(MembersContainer)
