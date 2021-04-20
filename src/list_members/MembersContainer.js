import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useRouteMatch, useParams } from 'react-router-dom'
import MemberCard from './components/MemberCard'
import { NiceLink } from '../common/elements'

import {
  loadMembers,
} from '../actions/ListMemberActions'

const MembersContainer = ({ members, load }) => {
  const { path, url } = useRouteMatch()
  const {list_id} = useParams()

  useEffect(() => {
    load(list_id)
  }, [])

  return (
    <div>
      { members.map(c => <MemberCard user={c} />) }
      <NiceLink to={`${url}/invite`}>invite a user</NiceLink>
    </div>
  );
}

const mapStateToProps = state => ({
  members: state.members
})
const mapDispatchToProps = dispatch => ({
  load: (list_id) => dispatch(loadMembers(list_id))
})
export default connect(mapStateToProps, mapDispatchToProps)(MembersContainer)
