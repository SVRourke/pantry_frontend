import React, { useState, useEffect } from 'react'
import InvitesControls from '../common/InvitesControls'
import FriendRequestCard from '../friends/FriendRequestCard'
import { Block } from '../common/elements'

import { connect } from "react-redux"
import {
  loadRequests,
  acceptRequest,
  cancelRequest
} from "../actions/FriendRequestActions"

const FriendRequestContainer = ({ userId, load, accept, cancel, requests }) => {
  useEffect(() => {
    load(userId)
  }, [])

  const handleRequest = (id, action) => {
    action === 'CANCEL'
      ? cancel(userId, id)
      : accept(userId, id)
  }

  const [filter, setFilter] = useState('received')
  const filteredRequests = requests.filter(r => r.type === filter)
  const cards = filteredRequests.map(r => {
    return (
      <FriendRequestCard
        record={r}
        clickHandler={handleRequest}
        key={r.id}
      />
    )
  })

  const filterChange = (event) => { setFilter(event.target.id) }

  return (
    <Block>
      <InvitesControls filter={filter} cb={filterChange} />
      {cards.length ? cards : <p>No requests...</p>}
    </Block>
  );
}
const mapStateToProps = state => ({
  userId: state.profile.userId,
  requests: state.friendRequests
})

const mapDispatchToProps = dispatch => ({
  load: (userId) => dispatch(loadRequests(userId)),
  accept: (userId, reqId) => dispatch(acceptRequest(userId, reqId)),
  cancel: (userId, reqId) => dispatch(cancelRequest(userId, reqId))
})
export default connect(mapStateToProps, mapDispatchToProps)(FriendRequestContainer)