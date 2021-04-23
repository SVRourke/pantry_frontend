import React, { useState, useEffect } from 'react'
import InvitesControls from '../common/InvitesControls'
import FriendRequestCard from '../friends/FriendRequestCard'
import { Block } from '../common/elements'

import { connect } from "react-redux"
import { 
  loadRequests,
  acceptRequest
 } from "../actions/FriendRequestActions"

const FriendRequestContainer = ({ userId, load, accept, requests }) => {
  useEffect(() => {
    load(userId)
  }, [])

  const handleRequest = (id, action) => {
    switch (action) {
      case 'CANCEL':
        alert(`CANCEL ID: ${id}`)
        break;
      case 'ACCEPT':
        alert(`ACCEPT ID: ${id}`)
        accept(userId, id)
        break;
      default:
        return false
    }
  }

  const [filter, setFilter] = useState('received')
  const cards = requests.filter(r => r.type === filter).map(r => {
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
  accept: (userId, reqId) => dispatch(acceptRequest(userId, reqId))
})
export default connect(mapStateToProps, mapDispatchToProps)(FriendRequestContainer)